import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, MovieDetailsPage, NotFoundPage, MoviesPage } from './pages/index.js';
import { MovieCast, MovieReviews, Navigation, Loader } from './components/index.js';


function App() {
  return <>
    <Suspense fallback={<Loader />}>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Suspense>
  </>;
}

export default App;