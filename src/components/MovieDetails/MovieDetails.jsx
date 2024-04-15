import { CONSTANTS } from '../../js/constants.js';
import { Link } from 'react-router-dom';

function MovieDetails({ movieData }) {
  const { id, poster_path: moviePoster, genres, title, overview, vote_average: userScore } = movieData || {};
  return (
    movieData && (
      <div>
        <img src={CONSTANTS.PHOTO_BASE_URL + moviePoster} alt={`Movie Poster ${title}`} />
        <div>
          <h3>{title}</h3>
          <p>User score: {`${(userScore * 10).toFixed()}%`}</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres</b>
          <ul>
            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
        <div>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      </div>
    )
  );
}

export default MovieDetails;


