import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import FeedbackButton from './components/FeedbackButton'; // Import the FeedbackButton component
import QtifyLogo from './Qtify-logo.PNG';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
        <img src={QtifyLogo} alt="Qtify Logo" className="qtify-logo" />
        </div>
        <div className="navbar-center">
          {/* SearchBar component is intentionally used */}
          <SearchBar placeholder="Search a song of your choice" />
        </div>
        <div className="navbar-right">
          {/* FeedbackButton component is intentionally used */}
          <FeedbackButton />
        </div>
      </nav>
       {/* Insert HeroSection component */}
       <HeroSection />
       <FilterSection/>
      {/* Other content */}
    </div>
  );
}

export default App;
