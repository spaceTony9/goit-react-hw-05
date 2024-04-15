import { fetchMovieCast } from '../../js/apiSevice.js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CastMemberCard, Error, Loader } from '../index.js';

function MovieCast() {
  const { movieId } = useParams();
  const {
    data,
    isFetching,
    error,
  } = useQuery([`${movieId}/cast`], () => fetchMovieCast(movieId), { refetchOnWindowFocus: false });

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return <>{data?.cast && data.cast.map(castWorker => <CastMemberCard key={castWorker.id} cast={castWorker} />)}</>;
}

export default MovieCast;