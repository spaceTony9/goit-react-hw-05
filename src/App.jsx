import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, MovieDetailsPage, NotFoundPage, MoviesPage } from './pages/index.js';


function App() {
  return <>
    <header></header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={} />
          <Route path="/movies/:movieId/reviews" element={} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}

export default App;