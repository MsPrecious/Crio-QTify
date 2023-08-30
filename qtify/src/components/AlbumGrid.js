import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import '../App.css'; // Import your custom CSS file

const AlbumGrid = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch top albums from the API endpoint
    const fetchTopAlbums = async () => {
      try {
        const topAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setTopAlbums(topAlbumsResponse.data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchTopAlbums();
  }, []);

  const handleShowAllToggle = async () => {
    if (!showAll) {
      try {
        const allTopAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/all-top');
        setTopAlbums(allTopAlbumsResponse.data);
      } catch (error) {
        console.error('Error fetching all top albums:', error);
      }
    } else {
      const topAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
      setTopAlbums(topAlbumsResponse.data);
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
        <h2 className="top-albums-heading">Top Albums</h2>
        <div className="show-all-button" onClick={handleShowAllToggle}>
          {showAll ? 'Collapse' : 'Show All'}
        </div>
      </div>
      {showAll ? (
        <div className="album-grid show-all">
          {topAlbums.map((album, index) => (
            <Card
              key={album.id}
              imageSrc={album.image}
              followsText={`${album.follows} Follows`}
              albumTitle={album.title}
              showAll={showAll}
              index={index}
              totalAlbums={topAlbums.length}
            />
          ))}
        </div>
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {topAlbums.map((album, index) => (
              <Card
                key={album.id}
                imageSrc={album.image}
                followsText={`${album.follows} Follows`}
                albumTitle={album.title}
                showAll={showAll}
                index={index}
                totalAlbums={topAlbums.length}
              />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default AlbumGrid;
