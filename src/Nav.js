import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="App-header navbar">
      <ul>
        <li> Movie DATA </li>
        <li>List of Movies:{movies.length}</li>
      </ul>
      {/* <h3>Saqib</h3>
      <p>List of Movies:{movies.length}</p> */}
    </div>
  );
};

export default Nav;
