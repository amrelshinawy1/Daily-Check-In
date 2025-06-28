import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Button, Text, YStack, XStack, TextArea, Spinner } from 'tamagui';
import { MoodSelector } from '../components/MoodSelector';
import { EnergySlider } from '../components/EnergySlider';
import { SuggestionCard } from '../components/SuggestionCard';
import { ApiService } from '../services/api.service';
import { CheckinFormData, CheckinResponse, MoodOption } from '../types/checkin.types';

export const DailyCheckInScreen: React.FC = () => {
  // TODO: Add form validation library like react-hook-form for better UX
  const [formData, setFormData] = useState<CheckinFormData>({
    mood: '',
    energy: 5, // Default to middle energy level
    notes: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<CheckinResponse | null>(null);

  const handleMoodSelect = (mood: MoodOption) => {
    setFormData(prev => ({ ...prev, mood }));
  };

  const handleEnergyChange = (energy: number) => {
    setFormData(prev => ({ ...prev, energy }));
  };

  const handleNotesChange = (notes: string) => {
    setFormData(prev => ({ ...prev, notes }));
  };

  const handleSubmit = async () => {
    // Basic validation - TODO: Add more comprehensive validation
    if (!formData.mood) {
      Alert.alert('Missing Information', 'Please select your mood');
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      const result = await ApiService.submitCheckin({
        mood: formData.mood,
        energy: formData.energy,
        notes: formData.notes,
      });
      
      setResponse(result);
    } catch (error) {
      // TODO: Add better error handling and user feedback
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Failed to submit check-in'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      mood: '',
      energy: 5,
      notes: '',
    });
    setResponse(null);
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
      <YStack space="$6" padding="$4">
        {/* Header */}
        <YStack alignItems="center" space="$2">
          <Text fontSize="$10" fontWeight="bold" color="$blue11">
            🌟 Daily Check-In
          </Text>
          <Text fontSize="$4" color="$gray11" textAlign="center">
            Take a moment to reflect on your wellbeing
          </Text>
        </YStack>

        {/* Mood Selection */}
        <MoodSelector
          selectedMood={formData.mood}
          onMoodSelect={handleMoodSelect}
        />

        {/* Energy Slider */}
        <EnergySlider
          energy={formData.energy}
          onEnergyChange={handleEnergyChange}
        />

        {/* Notes Input */}
        <YStack space="$3">
          <Text fontSize="$5" fontWeight="bold" textAlign="center">
            Any thoughts or notes? (Optional)
          </Text>
          <TextArea
            placeholder="How was your day? Any specific feelings or events..."
            value={formData.notes}
            onChangeText={handleNotesChange}
            minHeight={100}
            padding="$3"
            borderRadius="$4"
            borderColor="$gray8"
            backgroundColor="$gray1"
          />
        </YStack>

        {/* Submit Button */}
        <Button
          size="$5"
          backgroundColor="$blue10"
          color="$white"
          borderRadius="$6"
          onPress={handleSubmit}
          disabled={isLoading || !formData.mood}
          pressStyle={{ scale: 0.98 }}
        >
          {isLoading ? (
            <XStack space="$2" alignItems="center">
              <Spinner size="small" color="$white" />
              <Text color="$white" fontSize="$4">
                Processing...
              </Text>
            </XStack>
          ) : (
            <Text color="$white" fontSize="$4" fontWeight="bold">
              Get Wellness Tips
            </Text>
          )}
        </Button>

        {/* Reset Button - TODO: Maybe add confirmation dialog */}
        {response && (
          <Button
            size="$4"
            backgroundColor="$gray5"
            color="$gray11"
            borderRadius="$4"
            onPress={handleReset}
            pressStyle={{ scale: 0.98 }}
          >
            <Text fontSize="$3">Start New Check-In</Text>
          </Button>
        )}

        {/* Response */}
        {response && (
          <SuggestionCard
            suggestions={response.suggestions}
            timestamp={response.timestamp}
          />
        )}
      </YStack>
    </ScrollView>
  );
}; 