import { Link, useLocation } from 'react-router-dom';
import { CONSTANTS } from '/src/js/constants.js';
import { useRef } from 'react';

function MovieList({ movies }) {
  const location = useLocation();
  return <div>
    <ul> {movies.map(movie => {
      const { poster_path: photoPath, id, title } = movie;
      return <li key={id}>
        <div>
          <img src={CONSTANTS.PHOTO_BASE_URL + photoPath} alt={title} />
          <Link to={`/movies/${id}`} state={location}><h2>{title}</h2></Link>
        </div>
      </li>;
    })}</ul>
  </div>;
}

export default MovieList;

