import { Loader, MovieList, MovieSearchForm } from '../../components/index.js';
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchMovieWithKeyWord } from '../../js/apiSevice.js';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const pageParam = params.get('page') ?? 1;
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
    hasNextPage,
  } = useInfiniteQuery(query, () => fetchMovieWithKeyWord(query, pageParam), {
    getNextPageParam: (lastPage) => lastPage.page + 1, enabled: !!query, refetchOnWindowFocus: false,
  });
  let flatMovies = moviesData?.pages.map((movie) => movie.results).flat();

  if (isFetching) {
    return <Loader />;
  }


  function handleSearchChange(query) {
    params.set('query', query);
    setParams(params);
    setQuery(query);
  }

  return <div>
    <MovieSearchForm handleSearchChange={handleSearchChange} />
    {flatMovies?.length ? <MovieList movies={flatMovies} /> : []}
  </div>;
}

export default MoviesPage;