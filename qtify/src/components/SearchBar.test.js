import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './components/SearchBar';

test('renders search bar with placeholder', () => {
  const placeholderText = 'Search a song of your choice';
  render(<SearchBar placeholder={placeholderText} />);

  const searchBar = screen.getByPlaceholderText(placeholderText);
  expect(searchBar).toBeInTheDocument();
});
