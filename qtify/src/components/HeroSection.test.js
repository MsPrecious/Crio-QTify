import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders correctly', () => {
    render(<HeroSection />);
    
    // Test for the presence of specific text content
    expect(screen.getByText('100 Thousand Songs, ad-free')).toBeInTheDocument();
    expect(screen.getByText('Over thousands podcast episodes')).toBeInTheDocument();

    // Test for the presence of the logo image
    const logoImage = screen.getByAltText('vibrating-headphone');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/vibrating-headphone.PNG'); 

  });
});
