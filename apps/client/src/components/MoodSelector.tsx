import React from 'react';
import { View } from 'react-native';
import { Button, Text, YStack } from 'tamagui';
import { MoodOption } from '../types/checkin.types';

interface MoodSelectorProps {
  selectedMood: string;
  onMoodSelect: (mood: MoodOption) => void;
}

const MOOD_OPTIONS: { emoji: MoodOption; label: string }[] = [
  { emoji: '😀', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😤', label: 'Stressed' },
];

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
}) => {
  return (
    <YStack space="$4" alignItems="center">
      <Text fontSize="$6" fontWeight="bold" textAlign="center">
        How are you feeling today?
      </Text>
      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
        {MOOD_OPTIONS.map(({ emoji, label }) => (
          <Button
            key={emoji}
            size="$6"
            borderRadius="$8"
            backgroundColor={selectedMood === emoji ? '$blue10' : '$gray5'}
            borderColor={selectedMood === emoji ? '$blue8' : '$gray8'}
            borderWidth={2}
            onPress={() => onMoodSelect(emoji)}
            pressStyle={{ scale: 0.95 }}
          >
            <YStack alignItems="center" space="$2">
              <Text fontSize="$8">{emoji}</Text>
              <Text fontSize="$3" color={selectedMood === emoji ? '$white' : '$gray11'}>
                {label}
              </Text>
            </YStack>
          </Button>
        ))}
      </View>
    </YStack>
  );
}; 