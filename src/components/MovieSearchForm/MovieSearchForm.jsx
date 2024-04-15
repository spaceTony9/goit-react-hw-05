function MovieSearchForm({ handleSearchChange }) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSearchChange(e.target.elements.movieSearch.value);
    e.target.reset();
  }

  return <form action="" onSubmit={handleSubmit}>
    <input type="text" name="movieSearch" placeholder="Search movies" />
    <button type="submit">Search</button>
  </form>;
}

export default MovieSearchForm;