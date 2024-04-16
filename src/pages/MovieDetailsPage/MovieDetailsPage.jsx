import { fetchMovieDetails } from '../../js/apiSevice.js';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Error, GoBackBtn, Loader, MovieDetails } from '../../components/index.js';
import { useRef } from 'react';


function MovieDetailsPage() {
  const { movieId } = useParams();
  const {
    data,
    isFetching,
    error,
  } = useQuery([movieId], () => fetchMovieDetails(movieId), { refetchOnWindowFocus: false });
  const location = useLocation();
  console.log(location);

  const locationRef = useRef(location.state);
  console.log(locationRef.current);

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return <div>
    <GoBackBtn route={locationRef.current ? locationRef.current : '/movies'} />
    <MovieDetails movieData={data} />
    <Outlet />
  </div>;
}

export default MovieDetailsPage;