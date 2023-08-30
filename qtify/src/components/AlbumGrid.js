import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AlbumGrid = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const topAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        const newAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/new');

        const topAlbums = topAlbumsResponse.data;
        const newAlbums = newAlbumsResponse.data;

        setAlbums([...topAlbums, ...newAlbums]);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const filteredAlbums = selectedGenre === 'All'
    ? albums
    : albums.filter(album => album.genre && album.genre.key === selectedGenre);

    const topAlbums = filteredAlbums.filter(album => album.isTopAlbum); 
    const newSongs = filteredAlbums.filter(album => album.isNewSong); 
    

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <div className="slick-prev">{"<"}</div>,
    nextArrow: <div className="slick-next">{">"}</div>,
  };

  return (
    <div>
      {/* Filter section */}
      <div className="filter-section">
        <p className="filter-heading">Songs:</p>
        <div className="filter-buttons">
          <button onClick={() => setSelectedGenre('All')}>All</button>
          <button onClick={() => setSelectedGenre('Rock')}>Rock</button>
          <button onClick={() => setSelectedGenre('Pop')}>Pop</button>
          <button onClick={() => setSelectedGenre('Jazz')}>Jazz</button>
          <button onClick={() => setSelectedGenre('Blues')}>Blues</button>
        </div>
      </div>

      {/* Top Albums Slider */}
      <div className="card-slider">
        <h2>Top Albums</h2>
        <Slider {...settings}>
          {topAlbums.map(album => (
            <div key={album.id}>
              <Card
                imageSrc={album.image}
                followsText={`${album.follows} Follows`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* New Songs Slider */}
      <div className="card-slider">
        <h2>New Songs</h2>
        <Slider {...settings}>
          {newSongs.map(song => (
            <div key={song.id}>
              <Card
                imageSrc={song.image}
                followsText={`${song.follows} Follows`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AlbumGrid;
