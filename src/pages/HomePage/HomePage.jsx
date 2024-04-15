import { Error, Loader, MovieList } from '../../components/index.js';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { fetchPopularMovies } from '../../js/apiSevice.js';

function HomePage() {
  const queryClient = useQueryClient();
  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
  } = useInfiniteQuery('popular-movies', ({ pageParam = 1 }) => fetchPopularMovies(pageParam), {
    getNextPageParam: (lastPage) => lastPage.page + 1, suspense: true, refetchOnWindowFocus: false,
  });

  const flatMovies = movies?.pages.map((movie) => movie.results).flat();

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return <div>
    {/*TODO: BUTTON LOAD MORE: TEMPLATE (<button onClick={fetchNextPage} disabled={isFetching}>Load more</button>) */}
    <MovieList movies={flatMovies} /></div>;
}

export default HomePage;