import React from 'react';
import { Mood } from '../types/checkin.types';

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onMoodSelect: (mood: Mood) => void;
  platform: 'web' | 'mobile';
}

const moods = [
  { emoji: '😊', value: 'happy' as Mood, label: 'Happy', color: '#10b981' },
  { emoji: '😐', value: 'neutral' as Mood, label: 'Neutral', color: '#f59e0b' },
  { emoji: '😔', value: 'sad' as Mood, label: 'Sad', color: '#3b82f6' },
  { emoji: '😤', value: 'frustrated' as Mood, label: 'Frustrated', color: '#ef4444' },
];

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
  platform,
}) => {
  if (platform === 'web') {
    return (
      <div className="mood-selector slide-up">
        <div className="mood-grid">
          {moods.map((mood, index) => (
            <button
              key={mood.value}
              className={`mood-option ${selectedMood === mood.value ? 'selected' : ''}`}
              onClick={() => onMoodSelect(mood.value)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="mood-emoji">{mood.emoji}</div>
              <div className="mood-label">{mood.label}</div>
              {selectedMood === mood.value && (
                <div 
                  className="mood-indicator"
                  style={{ backgroundColor: mood.color }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Mobile implementation
  const { View, Text, TouchableOpacity, StyleSheet } = require('react-native');
  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16,
    },
    option: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#e5e7eb',
      borderRadius: 12,
      minWidth: 100,
      minHeight: 100,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    selectedOption: {
      borderColor: '#6366f1',
      backgroundColor: '#6366f1',
      transform: [{ translateY: -2 }],
      shadowColor: '#6366f1',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    emoji: {
      fontSize: 32,
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: '#111827',
      textAlign: 'center',
    },
    selectedLabel: {
      color: '#ffffff',
    },
    indicator: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 12,
      height: 12,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#ffffff',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={mood.value}
            style={[
              styles.option,
              selectedMood === mood.value && styles.selectedOption,
              { animationDelay: index * 100 }
            ]}
            onPress={() => onMoodSelect(mood.value)}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>{mood.emoji}</Text>
            <Text style={[
              styles.label,
              selectedMood === mood.value && styles.selectedLabel
            ]}>
              {mood.label}
            </Text>
            {selectedMood === mood.value && (
              <View 
                style={[
                  styles.indicator,
                  { backgroundColor: mood.color }
                ]} 
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}; 