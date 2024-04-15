import { fetchMovieDetails } from '../../js/apiSevice.js';
import { Outlet, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Error, GoBackBtn, Loader, MovieDetails } from '../../components/index.js';


function MovieDetailsPage() {
  const { movieId } = useParams();
  const {
    data,
    isFetching,
    error,
  } = useQuery([movieId], () => fetchMovieDetails(movieId), { refetchOnWindowFocus: false });

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return <div>
    <GoBackBtn route="/" />
    <MovieDetails movieData={data} />
    <Outlet />
  </div>;
}

export default MovieDetailsPage;