import { ErrorMessage, Loader, LoadMoreBtn, MovieList } from '../../components/index.js';
import { useInfiniteQuery } from 'react-query';
import { fetchPopularMovies } from '../../js/apiSevice.js';
import css from './HomePage.module.css';

function HomePage() {
  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
  } = useInfiniteQuery('popular-movies', ({ pageParam = 1 }) => fetchPopularMovies(pageParam), {
    getNextPageParam: (lastPage) => lastPage.page + 1,
    suspense: true,
    refetchOnWindowFocus: false,
  });

  const flatMovies = movies?.pages.map((movie) => movie.results).flat();

  function handleSeeMoreClick() {
    fetchNextPage();
  }

  return <div>
    <h1 className={css.homePageTitle}>Trending Today</h1>
    {flatMovies?.length ? <MovieList movies={flatMovies} /> : []}
    {error && <ErrorMessage />}
    {isFetching && <Loader />}
    {hasNextPage && <LoadMoreBtn isFetching={isFetching} handleSeeMoreClick={handleSeeMoreClick} />}
  </div>;
}

export default HomePage;