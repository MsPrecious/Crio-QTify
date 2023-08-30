import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import '../App.css'; // Import your custom CSS file

const AlbumGrid = () => {
  const [newSongs, setNewSongs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch top albums from the API endpoint
    const fetchNewSongs = async () => {
      try {
        const newSongsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        setNewSongs(newSongsResponse.data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchNewSongs();
  }, []);

  const handleShowAllToggle = async () => {
    if (!showAll) {
      try {
        const allNewSongsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        setNewSongs(allNewSongsResponse.data);
      } catch (error) {
        console.error('Error fetching all top albums:', error);
      }
    } else {
      const NewSongsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
      setNewSongs(NewSongsResponse.data);
    }
    setShowAll(!showAll);
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

  return (
    <div className="album-grid-container">
      <div className="album-grid-header">
        <h2 className="top-albums-heading">New Albums</h2>
        <div className="show-all-button" onClick={handleShowAllToggle}>
          {showAll ? 'Collapse' : 'Show All'}
        </div>
      </div>
      {showAll ? (
        <div className="album-grid show-all">
          {newSongs.map((album, index) => (
            <Card
              key={album.id}
              imageSrc={album.image}
              followsText={`${album.follows} Follows`}
              albumTitle={album.title}
              showAll={showAll}
              index={index}
              totalSongs={newSongs.length}
            />
          ))}
        </div>
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {newSongs.map((album, index) => (
              <Card
                key={album.id}
                imageSrc={album.image}
                followsText={`${album.follows} Follows`}
                albumTitle={album.title}
                showAll={showAll}
                index={index}
                totalSongs={newSongs.length}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default AlbumGrid;
