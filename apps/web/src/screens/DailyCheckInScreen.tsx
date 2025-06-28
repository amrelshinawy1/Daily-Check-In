import React, { useState } from 'react';
import { MoodSelector } from '../components/MoodSelector';
import { EnergySlider } from '../components/EnergySlider';
import { SuggestionCard } from '../components/SuggestionCard';
import { ApiService } from '../services/api.service';
import { CheckinData, CheckinResponse } from '../types/checkin.types';

export const DailyCheckInScreen: React.FC = () => {
  const [mood, setMood] = useState<string | null>(null);
  const [energy, setEnergy] = useState(5);
  const [notes, setNotes] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!mood) {
      setError('Please select your mood');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const checkinData: CheckinData = {
        mood: mood as any,
        energy,
        notes: notes.trim() || undefined,
      };

      const response: CheckinResponse = await ApiService.submitCheckin(checkinData);
      setSuggestions(response.suggestions);
    } catch (err) {
      setError('Failed to submit check-in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="checkin-container">
      <div className="checkin-content">
        {/* Header */}
        <header className="checkin-header slide-up">
          <h1 className="checkin-title">Daily Check-In</h1>
          <p className="checkin-subtitle">
            Take a moment to reflect on how you're feeling today. 
            We'll provide personalized wellness suggestions based on your mood and energy.
          </p>
        </header>

        {/* Main Form */}
        <div className="checkin-form card slide-up">
          {/* Mood Selection */}
          <section className="form-section">
            <h2 className="section-title">How are you feeling?</h2>
            <MoodSelector selectedMood={mood} onMoodSelect={setMood} />
          </section>

          {/* Energy Level */}
          <section className="form-section">
            <h2 className="section-title">Energy Level</h2>
            <EnergySlider energy={energy} onEnergyChange={setEnergy} />
          </section>

          {/* Notes */}
          <section className="form-section">
            <h2 className="section-title">Any thoughts or notes?</h2>
            <textarea
              className="input textarea"
              placeholder="Share what's on your mind... (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </section>

          {/* Error Message */}
          {error && (
            <div className="error-message slide-up">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            className={`btn btn-primary btn-lg ${isLoading ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={isLoading || !mood}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Getting Suggestions...
              </>
            ) : (
              <>
                <span>✨</span>
                Get Wellness Tips
              </>
            )}
          </button>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <section className="suggestions-section slide-up">
            <h2 className="suggestions-title">Your Wellness Suggestions</h2>
            <div className="suggestions-grid">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard
                  key={index}
                  suggestion={suggestion}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}; 