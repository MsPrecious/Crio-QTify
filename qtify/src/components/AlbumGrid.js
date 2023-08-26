import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const AlbumGrid = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoints
    const fetchAlbums = async () => {
      try {
        const topAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        const newAlbumsResponse = await axios.get('https://qtify-backend-labs.crio.do/albums/new');

        const topAlbums = topAlbumsResponse.data;
        const newAlbums = newAlbumsResponse.data;

        // Combine and set the fetched albums
        setAlbums([...topAlbums, ...newAlbums]);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="card-section">
      {albums.map((album) => (
        <Card
          key={album.id}
          imageSrc={album.image}
          followsText={`${album.follows} Follows`}
          // You can pass more props as needed
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
