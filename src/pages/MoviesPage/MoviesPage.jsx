import { Loader, MovieList, MovieSearchForm } from '../../components/index.js';
import { useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { fetchMovieWithKeyWord } from '../../js/apiSevice.js';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const {
    data: moviesData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(query, ({ pageParam = 1 }) => fetchMovieWithKeyWord(query, pageParam), {
    getNextPageParam: (lastPage) => lastPage.page + 1, enabled: !!query, refetchOnWindowFocus: false,
  });
  const flatMovies = moviesData?.pages.map((movie) => movie.results).flat();

  if (isFetching) {
    return <Loader />;
  }
  console.log(flatMovies);


  console.log(moviesData, hasNextPage);

  function handleSearchChange(query) {
    setQuery(query);
  }

  return <div>
    <MovieSearchForm handleSearchChange={handleSearchChange} />
    {flatMovies?.length ? <MovieList movies={flatMovies} /> : []}
  </div>;
}

export default MoviesPage;