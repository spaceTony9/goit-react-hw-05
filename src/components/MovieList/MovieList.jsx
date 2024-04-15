import { Link } from 'react-router-dom';
import { CONSTANTS } from '/src/js/constants.js';

function MovieList({ movies }) {
  return <div>
    <ul> {movies.map(movie => {
      const { poster_path: photoPath, id, title } = movie;
      return <li key={id}><Link to={`/movies/${id}`}>
        <div>
          <img src={CONSTANTS.PHOTO_BASE_URL + photoPath} alt={title} />
          <h2>{title}</h2>
        </div>
      </Link></li>;
    })}</ul>
  </div>;
}

export default MovieList;

