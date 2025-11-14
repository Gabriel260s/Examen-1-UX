function MovieCard({ movie, onClick }) {
  return (
    <img
      className="movie-poster"
      src={movie.poster}
      alt=""
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default MovieCard;
