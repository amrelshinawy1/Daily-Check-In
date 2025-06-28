import React from 'react';

interface SuggestionCardProps {
  suggestion: string;
  index: number;
}

const getSuggestionIcon = (index: number) => {
  const icons = ['💡', '🌟', '🎯', '✨', '🚀', '💪', '🧘', '🌱'];
  return icons[index % icons.length];
};

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  index,
}) => {
  const icon = getSuggestionIcon(index);

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
}; 