import { ErrorMessage, Loader, LoadMoreBtn, MovieList, MovieSearchForm } from '../../components/index.js';
import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchMovieWithKeyWord } from '../../js/apiSevice.js';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    const queryParam = params.get('query');
    if (queryParam) {
      return queryParam;
    }
    return '';
  });
  const {
    data: moviesData,
    isFetching,
    fetchNextPage,
    hasNextPage, error, isFetched,
  } = useInfiniteQuery(query, ({ pageParam = 1 }) => fetchMovieWithKeyWord(query, pageParam), {
    getNextPageParam: (lastPage) => lastPage.page + 1, enabled: !!query, refetchOnWindowFocus: false,
  });
  let flatMovies = moviesData?.pages.map((movie) => movie.results).flat();

  function handleSearchChange(query) {
    params.set('query', query);
    setParams(params);
    setQuery(query);
  }

  function handleSeeMoreClick() {
    fetchNextPage();
  }

  return <div>
    <MovieSearchForm handleSearchChange={handleSearchChange} />
    {flatMovies?.length > 0 && <MovieList movies={flatMovies} />}
    {isFetched && !flatMovies?.length && <p>No movies found</p>}
    {isFetching && <Loader />}
    {error && <ErrorMessage />}
    {isFetched && flatMovies?.length > 0 &&
      <LoadMoreBtn handleSeeMoreClick={handleSeeMoreClick} isFetching={isFetching} />}
  </div>;
}

export default MoviesPage;