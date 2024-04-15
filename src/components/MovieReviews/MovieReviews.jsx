import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieReviews } from '../../js/apiSevice.js';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList.jsx';
import { Error, Loader } from '../index.js';

function MovieReviews() {

  const { movieId } = useParams();
  const { data, isFetching, error, isFetched } = useQuery([`${movieId}/reviews`], () => fetchMovieReviews(movieId), {
    refetchOnWindowFocus: false,
  });

  // TODO: look for smooth scroll down when reviews are fetched
  // if (isFetched) {
  //   window.scrollBy({ top: window.scrollY + 500, behavior: 'smooth' });
  // }
  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return <>{data?.results.length ? data.results.map(movieReview => <MovieReviewsList key={movieReview.id}
                                                                                     review={movieReview} />) :
    <p>No reviews found</p>}</>;
}

export default MovieReviews;

