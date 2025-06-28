import React from 'react';
import { XStack, Button, Text } from 'tamagui';

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (mood: 'happy' | 'neutral' | 'sad' | 'frustrated') => void;
}

const moods = [
  { emoji: '😀', value: 'happy', label: 'Happy' },
  { emoji: '😐', value: 'neutral', label: 'Neutral' },
  { emoji: '😔', value: 'sad', label: 'Sad' },
  { emoji: '😤', value: 'frustrated', label: 'Frustrated' },
];

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
}) => {
  return (
    <XStack space="$4" justifyContent="center" flexWrap="wrap">
      {moods.map((mood) => (
        <Button
          key={mood.value}
          size="$4"
          variant={selectedMood === mood.value ? 'filled' : 'outlined'}
          onPress={() => onMoodSelect(mood.value as any)}
          pressStyle={{ scale: 0.95 }}
        >
          <Text fontSize="$6">{mood.emoji}</Text>
          <Text fontSize="$3" marginLeft="$2">
            {mood.label}
          </Text>
        </Button>
      ))}
    </XStack>
  );
}; 