import React from 'react';

interface EnergySliderProps {
  energy: number;
  onEnergyChange: (energy: number) => void;
  platform: 'web' | 'mobile';
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
  platform,
}) => {
  const energyColor = getEnergyColor(energy);
  const energyEmoji = getEnergyEmoji(energy);

  if (platform === 'web') {
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
  }

  // Mobile implementation
  const { View, Text, Slider, StyleSheet } = require('react-native');
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 400,
      alignSelf: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: 24,
    },
    display: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    emoji: {
      fontSize: 24,
    },
    value: {
      fontSize: 24,
      fontWeight: '700',
    },
    sliderContainer: {
      gap: 16,
    },
    slider: {
      width: '100%',
      height: 40,
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: '#6366f1',
      borderWidth: 3,
      borderColor: '#ffffff',
      shadowColor: '#6366f1',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    labels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 14,
      color: '#6b7280',
      fontWeight: '500',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.display}>
          <Text style={styles.emoji}>{energyEmoji}</Text>
          <Text style={[styles.value, { color: energyColor }]}> {energy}/10 </Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={energy}
          onValueChange={onEnergyChange}
          minimumTrackTintColor={energyColor}
          maximumTrackTintColor="#e5e7eb"
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
        />
        <View style={styles.labels}>
          <Text style={styles.label}>Low Energy 😴</Text>
          <Text style={styles.label}>High Energy ⚡</Text>
        </View>
      </View>
    </View>
  );
}; 