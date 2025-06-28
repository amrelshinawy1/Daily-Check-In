import React from 'react';
import { EnergySlider as SharedEnergySlider } from '@daily-check-in/shared-components';

interface EnergySliderProps {
  energy: number;
  onEnergyChange: (energy: number) => void;
}

export const EnergySlider: React.FC<EnergySliderProps> = (props) => {
  return <SharedEnergySlider {...props} platform="web" />;
}; 