import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  MoodSelector,
  EnergySlider,
  SuggestionCard,
  Mood,
  CheckinData,
  CheckinResponse,
} from '@daily-check-in/shared-components';
import { ApiService } from '../services/api.service';

export const DailyCheckInScreen: React.FC = () => {
  const [mood, setMood] = useState<Mood | null>(null);
  const [energy, setEnergy] = useState(5);
  const [notes, setNotes] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!mood) {
      Alert.alert('Error', 'Please select your mood');
      return;
    }

    setIsLoading(true);

    try {
      const checkinData: CheckinData = {
        mood,
        energy,
        notes: notes.trim() || undefined,
      };

      const response: CheckinResponse = await ApiService.submitCheckin(checkinData);
      setSuggestions(response.suggestions);
    } catch (err) {
      Alert.alert('Error', 'Failed to submit check-in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Daily Check-In</Text>
        <Text style={styles.subtitle}>
          Take a moment to reflect on how you're feeling today. 
          We'll provide personalized wellness suggestions based on your mood and energy.
        </Text>
      </View>

      {/* Main Form */}
      <View style={styles.form}>
        {/* Mood Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How are you feeling?</Text>
          <MoodSelector 
            selectedMood={mood} 
            onMoodSelect={setMood} 
            platform="mobile" 
          />
        </View>

        {/* Energy Level */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Energy Level</Text>
          <EnergySlider 
            energy={energy} 
            onEnergyChange={setEnergy} 
            platform="mobile" 
          />
        </View>

        {/* Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Any thoughts or notes?</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Share what's on your mind... (optional)"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[
            styles.button,
            (!mood || isLoading) && styles.buttonDisabled
          ]}
          onPress={handleSubmit}
          disabled={isLoading || !mood}
          activeOpacity={0.7}
        >
          {isLoading ? (
            <>
              <ActivityIndicator size="small" color="#ffffff" />
              <Text style={styles.buttonText}>Getting Suggestions...</Text>
            </>
          ) : (
            <>
              <Text style={styles.buttonIcon}>✨</Text>
              <Text style={styles.buttonText}>Get Wellness Tips</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <View style={styles.suggestionsSection}>
          <Text style={styles.suggestionsTitle}>Your Wellness Suggestions</Text>
          {suggestions.map((suggestion, index) => (
            <SuggestionCard
              key={index}
              suggestion={suggestion}
              index={index}
              platform="mobile"
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 400,
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#ffffff',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    gap: 8,
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    fontSize: 20,
  },
  suggestionsSection: {
    gap: 16,
  },
  suggestionsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
}); 