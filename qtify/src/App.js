import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import FeedbackButton from './components/FeedbackButton'; // Import the FeedbackButton component

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="qtify-logo.png" alt="Qtify Logo" className="qtify-logo" />
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
      {/* Other content */}
    </div>
  );
}

export default App;
