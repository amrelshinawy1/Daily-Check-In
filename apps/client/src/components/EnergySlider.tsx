import React from 'react';
import { View } from 'react-native';
import { Text, YStack, XStack } from 'tamagui';

interface EnergySliderProps {
  energy: number;
  onEnergyChange: (energy: number) => void;
}

export const EnergySlider: React.FC<EnergySliderProps> = ({
  energy,
  onEnergyChange,
}) => {
  // TODO: Replace with a proper slider component
  // For now, using buttons - not ideal but works for MVP
  const energyLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getEnergyColor = (level: number) => {
    if (level <= 3) return '$red10';
    if (level <= 7) return '$yellow10';
    return '$green10';
  };

  const getEnergyLabel = (level: number) => {
    if (level <= 3) return 'Low';
    if (level <= 7) return 'Medium';
    return 'High';
  };

  return (
    <YStack space="$4" alignItems="center">
      <Text fontSize="$6" fontWeight="bold" textAlign="center">
        How&apos;s your energy level?
      </Text>
      
      {/* TODO: Replace with proper slider component */}
      <XStack space="$2" flexWrap="wrap" justifyContent="center">
        {energyLevels.map((level) => (
          <View
            key={level}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: level === energy ? '#007AFF' : '#E5E5EA',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
            }}
            onTouchEnd={() => onEnergyChange(level)}
          >
            <Text
              fontSize="$3"
              color={level === energy ? '$white' : '$gray11'}
              fontWeight={level === energy ? 'bold' : 'normal'}
            >
              {level}
            </Text>
          </View>
        ))}
      </XStack>

      {/* Energy level indicator */}
      <YStack alignItems="center" space="$2">
        <Text fontSize="$5" color={getEnergyColor(energy)} fontWeight="bold">
          {getEnergyLabel(energy)} Energy
        </Text>
        <Text fontSize="$3" color="$gray11">
          Level {energy}/10
        </Text>
      </YStack>
    </YStack>
  );
}; 