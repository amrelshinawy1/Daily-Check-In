import React from 'react';
import { MoodSelector as SharedMoodSelector } from '@daily-check-in/shared-components';
import { Mood } from '@daily-check-in/shared-components';

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onMoodSelect: (mood: Mood) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = (props) => {
  return <SharedMoodSelector {...props} platform="web" />;
}; 