import React from 'react';
import { SuggestionCard as SharedSuggestionCard } from '@daily-check-in/shared-components';

interface SuggestionCardProps {
  suggestion: string;
  index: number;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = (props) => {
  return <SharedSuggestionCard {...props} platform="web" />;
}; 