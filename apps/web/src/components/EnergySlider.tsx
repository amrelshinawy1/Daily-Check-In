import React from 'react';

interface EnergySliderProps {
  energy: number;
  onEnergyChange: (energy: number) => void;
}

const getEnergyColor = (energy: number) => {
  if (energy <= 3) return '#ef4444'; // Red for low energy
  if (energy <= 6) return '#f59e0b'; // Yellow for medium energy
  return '#10b981'; // Green for high energy
};

const getEnergyEmoji = (energy: number) => {
  if (energy <= 3) return '😴';
  if (energy <= 6) return '😐';
  return '⚡';
};

export const EnergySlider: React.FC<EnergySliderProps> = ({
  energy,
  onEnergyChange,
}) => {
  const energyColor = getEnergyColor(energy);
  const energyEmoji = getEnergyEmoji(energy);

  return (
    <div className="energy-slider slide-up">
      <div className="energy-header">
        <div className="energy-display">
          <span className="energy-emoji">{energyEmoji}</span>
          <span className="energy-value" style={{ color: energyColor }}>
            {energy}/10
          </span>
        </div>
      </div>
      
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="10"
          value={energy}
          onChange={(e) => onEnergyChange(parseInt(e.target.value))}
          className="energy-range"
          style={{
            '--track-color': energyColor,
          } as React.CSSProperties}
        />
        
        <div className="energy-labels">
          <span className="energy-label">Low Energy 😴</span>
          <span className="energy-label">High Energy ⚡</span>
        </div>
      </div>
    </div>
  );
}; 