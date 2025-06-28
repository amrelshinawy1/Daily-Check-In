import React from 'react';

interface SuggestionCardProps {
  suggestion: string;
  index: number;
  platform: 'web' | 'mobile';
}

const getSuggestionIcon = (index: number) => {
  const icons = ['💡', '🌟', '🎯', '✨', '🚀', '💪', '🧘', '🌱'];
  return icons[index % icons.length];
};

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  index,
  platform,
}) => {
  const icon = getSuggestionIcon(index);

  if (platform === 'web') {
    return (
      <div 
        className="suggestion-card card card-hover scale-in"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        <div className="suggestion-header">
          <span className="suggestion-icon">{icon}</span>
          <span className="suggestion-number">Suggestion {index + 1}</span>
        </div>
        <p className="suggestion-text">{suggestion}</p>
      </div>
    );
  }

  // Mobile implementation
  const { View, Text, StyleSheet } = require('react-native');
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 24,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#e5e7eb',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
    },
    icon: {
      fontSize: 24,
    },
    number: {
      fontSize: 14,
      fontWeight: '600',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      color: '#111827',
    },
  });

  return (
    <View 
      style={[
        styles.card,
        { animationDelay: index * 100 }
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.number}>Suggestion {index + 1}</Text>
      </View>
      <Text style={styles.text}>{suggestion}</Text>
    </View>
  );
}; 