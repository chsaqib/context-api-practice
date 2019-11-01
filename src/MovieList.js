import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'I Robot',
      price: '10$',
      id: 1
    },
    {
      name: 'AI',
      price: '10$',
      id: 2
    },
    {
      name: 'Dark Night',
      price: '15$',
      id: 3
    }
  ]);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
