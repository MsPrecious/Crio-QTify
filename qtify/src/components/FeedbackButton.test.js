import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedbackButton from './components/FeedbackButton';

test('renders feedback button', () => {
  render(<FeedbackButton />);

  const feedbackButton = screen.getByText('Feedback');
  expect(feedbackButton).toBeInTheDocument();
});
