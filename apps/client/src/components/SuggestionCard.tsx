import React from 'react';
import { Card, Text, YStack, XStack } from 'tamagui';

interface SuggestionCardProps {
  suggestions: string[];
  timestamp: string;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestions,
  timestamp,
}) => {
  const formatTimestamp = (timestamp: string): string => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Card
      backgroundColor="$blue1"
      borderColor="$blue6"
      borderWidth={2}
      borderRadius="$6"
      padding="$4"
      margin="$4"
      shadowColor="$blue8"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={3}
    >
      <YStack space="$4">
        <XStack alignItems="center" space="$2">
          <Text fontSize="$8">💡</Text>
          <Text fontSize="$6" fontWeight="bold" color="$blue11">
            Your Daily Wellness Tips
          </Text>
        </XStack>
        
        <YStack space="$3">
          {suggestions.map((suggestion, index) => (
            <XStack key={index} space="$2" alignItems="flex-start">
              <Text fontSize="$4" color="$blue9" marginTop="$1">
                •
              </Text>
              <Text fontSize="$4" color="$gray12" flex={1}>
                {suggestion}
              </Text>
            </XStack>
          ))}
        </YStack>
        
        <Text fontSize="$3" color="$gray10" textAlign="center">
          Generated at {formatTimestamp(timestamp)}
        </Text>
      </YStack>
    </Card>
  );
}; 