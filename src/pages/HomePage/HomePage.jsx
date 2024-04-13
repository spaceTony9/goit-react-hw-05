import { MovieList } from '../../components/index.js';
import { useQuery, useQueryClient } from 'react-query';
import { fetchPopularMovies } from '../../apiSevice.js';

function HomePage() {
  const queryClient = useQueryClient();
  const { data } = useQuery({ queryKey: 'popular-movies', queryFn: () => fetchPopularMovies() });
  console.log(data);

  return <div><MovieList /></div>;
}

export default HomePage;