import React, { useState } from 'react';
import {
  YStack,
  XStack,
  Text,
  Button,
  TextArea,
  H1,
  H2,
  Paragraph,
  ScrollView,
} from 'tamagui';
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
    <ScrollView padding="$4" maxWidth={600} margin="0 auto">
      <YStack space="$6">
        <YStack space="$2" alignItems="center">
          <H1>🌟 Daily Check-In</H1>
          <Paragraph textAlign="center" color="$gray11">
            How are you feeling today?
          </Paragraph>
        </YStack>

        <YStack space="$4">
          <YStack space="$3">
            <H2>Mood</H2>
            <MoodSelector selectedMood={mood} onMoodSelect={setMood} />
          </YStack>

          <YStack space="$3">
            <H2>Energy Level (1-10)</H2>
            <EnergySlider energy={energy} onEnergyChange={setEnergy} />
          </YStack>

          <YStack space="$3">
            <H2>Notes (Optional)</H2>
            <TextArea
              placeholder="Any thoughts or notes?"
              value={notes}
              onChangeText={setNotes}
              minHeight={100}
            />
          </YStack>

          {error && (
            <Text color="$red10" textAlign="center">
              {error}
            </Text>
          )}

          <Button
            size="$4"
            onPress={handleSubmit}
            disabled={isLoading || !mood}
            backgroundColor={!mood ? '$gray5' : '$blue10'}
          >
            <Text color="white" fontWeight="bold">
              {isLoading ? 'Submitting...' : 'Get Wellness Tips'}
            </Text>
          </Button>
        </YStack>

        {suggestions.length > 0 && (
          <YStack space="$4">
            <H2 textAlign="center">Your Wellness Suggestions</H2>
            {suggestions.map((suggestion, index) => (
              <SuggestionCard
                key={index}
                suggestion={suggestion}
                index={index}
              />
            ))}
          </YStack>
        )}
      </YStack>
    </ScrollView>
  );
}; 