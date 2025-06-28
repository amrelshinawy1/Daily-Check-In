import React from 'react';
import { Card, Text, YStack } from 'tamagui';

interface SuggestionCardProps {
  suggestion: string;
  index: number;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  index,
}) => {
  return (
    <Card
      size="$4"
      bordered
      padding="$4"
      marginVertical="$2"
      backgroundColor="$background"
      borderColor="$borderColor"
    >
      <YStack space="$2">
        <Text fontSize="$3" fontWeight="bold" color="$blue10">
          Suggestion {index + 1}
        </Text>
        <Text fontSize="$4" lineHeight="$4">
          {suggestion}
        </Text>
      </YStack>
    </Card>
  );
}; 