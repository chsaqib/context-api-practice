import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
