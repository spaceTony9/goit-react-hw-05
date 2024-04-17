import { fetchMovieCast } from '../../js/apiSevice.js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CastMemberCard, ErrorMessage, Loader } from '../index.js';
import css from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const {
    data,
    isFetching,
    error,
  } = useQuery([`${movieId}/cast`], () => fetchMovieCast(movieId), { refetchOnWindowFocus: false });

  return <>
    {isFetching && <Loader />}
    {error && <ErrorMessage />}
    <ul className={css.castList}>
      {data?.cast && data.cast.map(castWorker => <CastMemberCard key={castWorker.id} cast={castWorker} />)}
    </ul>
    ;</>;

}

export default MovieCast;