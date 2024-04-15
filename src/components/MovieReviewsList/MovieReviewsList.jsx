function MovieReviewsList({ review: { author, content, created_at: reviewDate } }) {
  return <div>
    <ul>
      <li>
        <h2>{author}</h2>
        <span>{reviewDate}</span>
        <p>{content}</p>
      </li>
    </ul>
  </div>;
}

export default MovieReviewsList;