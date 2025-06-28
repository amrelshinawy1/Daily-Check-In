import React from 'react';
import { YStack, Text, Slider, XStack } from 'tamagui';

interface EnergySliderProps {
  energy: number;
  onEnergyChange: (energy: number) => void;
}

export const EnergySlider: React.FC<EnergySliderProps> = ({
  energy,
  onEnergyChange,
}) => {
  return (
    <YStack space="$2" width="100%">
      <Text fontSize="$4" textAlign="center">
        Energy Level: {energy}/10
      </Text>
      <Slider
        size="$4"
        width="100%"
        min={1}
        max={10}
        step={1}
        value={[energy]}
        onValueChange={(values) => onEnergyChange(values[0])}
      >
        <Slider.Track>
          <Slider.TrackActive />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider>
      <XStack justifyContent="space-between" marginTop="$2">
        <Text fontSize="$2" color="$gray10">Low Energy</Text>
        <Text fontSize="$2" color="$gray10">High Energy</Text>
      </XStack>
    </YStack>
  );
}; 