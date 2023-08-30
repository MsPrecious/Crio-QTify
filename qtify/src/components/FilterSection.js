import React, { useState, useEffect, useRef } from 'react'; 
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import '../App.css';

const FilterSection = () => {
  const [songs, setSongs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const sliderRef = useRef(null); // Ref to the Slider component

  useEffect(() => {
    // Fetch songs from the API endpoint
    const fetchSongs = async () => {
      try {
        const songsResponse = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(songsResponse.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    // Update the width of the filter line based on the slider's width
    const updateFilterLineWidth = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.innerSlider.list.clientWidth;
        const filterLine = document.querySelector('.filter-line');
        if (filterLine) {
          filterLine.style.width = `${sliderWidth}px`;
        }
      }
    };

    window.addEventListener('resize', updateFilterLineWidth);
    updateFilterLineWidth(); // Set initial width
    return () => {
      window.removeEventListener('resize', updateFilterLineWidth);
    };
  }, []);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <div className="navigation-arrow left">{"<"}</div>,
    nextArrow: <div className="navigation-arrow right">{">"}</div>,
  };

  const filteredSongs = selectedFilter === 'All'
  ? songs
  : songs.filter(song => song.genre.key === selectedFilter);


  return (
    <div className="filter-section">
      <div className="filter-header">
        <div className="filter-line" style={{ backgroundColor: '#5cb55c' }} />
       {/*<div className="filter-text">Songs</div>*/}
      </div>
      <div className="filter-options">
        <div
          className={`filter-option ${selectedFilter === 'All' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('All')}
        >
          All
        </div>
        <div
          className={`filter-option ${selectedFilter === 'Rock' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('Rock')}
        >
          Rock
        </div>
        <div
          className={`filter-option ${selectedFilter === 'Pop' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('Pop')}
        >
          Pop
        </div>
        <div
          className={`filter-option ${selectedFilter === 'Jazz' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('Jazz')}
        >
          Jazz
        </div>
        <div
          className={`filter-option ${selectedFilter === 'Blues' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('Blues')}
        >
          Blues
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {filteredSongs.map((song, index) => (
            <Card
              key={song.id}
              imageSrc={song.image}
              followsText={`${song.likes} Likes`} 
              albumTitle={song.title}
              showAll={true} // Always show slider functionality
              index={index}
              totalAlbums={filteredSongs.length}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FilterSection;
