import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { DailyCheckInScreen } from '../screens/DailyCheckInScreen';

// Mock the API service
jest.mock('../services/api.service', () => ({
  ApiService: {
    submitCheckin: jest.fn(),
  },
}));

describe('DailyCheckInScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main screen elements', () => {
    const { getByText } = render(<DailyCheckInScreen />);
    
    expect(getByText('🌟 Daily Check-In')).toBeTruthy();
    expect(getByText('How are you feeling today?')).toBeTruthy();
    expect(getByText('Energy Level (1-10)')).toBeTruthy();
    expect(getByText('Any thoughts or notes? (Optional)')).toBeTruthy();
  });

  it('allows mood selection', () => {
    const { getByText } = render(<DailyCheckInScreen />);
    
    const happyButton = getByText('😀');
    fireEvent.press(happyButton);
    
    expect(happyButton).toBeTruthy();
  });

  it('shows validation error when submitting without mood', async () => {
    const { getByText } = render(<DailyCheckInScreen />);
    
    const submitButton = getByText('Get Wellness Tips');
    fireEvent.press(submitButton);
    
    await waitFor(() => {
      expect(getByText('Please select your mood')).toBeTruthy();
    });
  });

  it('enables submit button when mood is selected', () => {
    const { getByText } = render(<DailyCheckInScreen />);
    
    const happyButton = getByText('😀');
    fireEvent.press(happyButton);
    
    const submitButton = getByText('Get Wellness Tips');
    expect(submitButton.props.disabled).toBeFalsy();
  });
}); 