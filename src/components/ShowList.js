import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowDetails from './ShowDetails';

const ShowList = () => {
  const API_URL='https://api.tvmaze.com/search/shows?q=all';

  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setShows(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowClick = (showId) => {
    const selected = shows.find((show) => show.show.id === showId);
    setSelectedShow(selected);
  };

  return (
    <div>
      <h1>Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
          <h2>{show.show.name}</h2>
          <p>{show.show.genres.join(', ')}</p>
          <p>{show.show.language}</p>
          <img src={show.image}/>
          <button onClick={() => handleShowClick(show.show.id)}>Show Summary</button>
        </li>
        ))}
      </ul>
      {selectedShow && (
            <ShowDetails selectedShow={selectedShow }  />
          )}
    </div>
  );
};

export default ShowList;