function MovieReviewsList({ review: { author, content, created_at: reviewDate } }) {
  const dateForUser = new Date(reviewDate);
  return <div>
    <ul>
      <li>
        <h2>{author}</h2>
        <span>{`Posted on: ${dateForUser.getDay()}/${dateForUser.getMonth()}/${dateForUser.getFullYear()}`}</span>
        <p>{content}</p>
      </li>
    </ul>
  </div>;
}

export default MovieReviewsList;