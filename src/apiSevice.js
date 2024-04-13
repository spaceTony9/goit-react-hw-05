import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';


export async function fetchMovieWithKeyWord(keyword, page) {
  const instance = axios.create({
    baseURL,
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3MjgxNmEzMDEzNmQ2NjIzZGMzMWY5NzA5N2U5ZCIsInN1YiI6IjY2MWE5ZmNlNWZmMzRlMDE2MzU5MjNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I6H3sedKUhIDITlkFzOZrVJ9zRIUVQ37ubBHqwRufQ',
    },
    params: {
      query: 'batman',
      page: 1,
      language: 'en-US',
    },
  });
  try {
    const response = await instance.get('/search/movie');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching photos:', error);
    throw error;
  }
}

export async function fetchPopularMovies() {
  const instance = axios.create({
    baseURL,
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3MjgxNmEzMDEzNmQ2NjIzZGMzMWY5NzA5N2U5ZCIsInN1YiI6IjY2MWE5ZmNlNWZmMzRlMDE2MzU5MjNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I6H3sedKUhIDITlkFzOZrVJ9zRIUVQ37ubBHqwRufQ',
    },
    params: { language: 'en-US' },
  });
  try {
    const response = await instance.get('/trending/movie/day');
    return response.data;
  } catch (error) {
    console.error('ErrorMessage fetching movies:', error);
    throw error;
  }
}
