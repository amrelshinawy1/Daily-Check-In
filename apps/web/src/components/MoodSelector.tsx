import React from 'react';

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (mood: 'happy' | 'neutral' | 'sad' | 'frustrated') => void;
}

const moods = [
  { emoji: '😊', value: 'happy', label: 'Happy', color: '#10b981' },
  { emoji: '😐', value: 'neutral', label: 'Neutral', color: '#f59e0b' },
  { emoji: '😔', value: 'sad', label: 'Sad', color: '#3b82f6' },
  { emoji: '😤', value: 'frustrated', label: 'Frustrated', color: '#ef4444' },
];

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
}) => {
  return (
    <div className="mood-selector slide-up">
      <div className="mood-grid">
        {moods.map((mood, index) => (
          <button
            key={mood.value}
            className={`mood-option ${selectedMood === mood.value ? 'selected' : ''}`}
            onClick={() => onMoodSelect(mood.value as any)}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="mood-emoji">{mood.emoji}</div>
            <div className="mood-label">{mood.label}</div>
            {selectedMood === mood.value && (
              <div 
                className="mood-indicator"
                style={{ backgroundColor: mood.color }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}; 