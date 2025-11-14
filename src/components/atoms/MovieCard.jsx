function MovieCard({ movie, onClick }) {
  return (
    <img
      className="movie-poster"
      src={movie.poster}
      alt={movie.title}
      onClick={onClick}
      draggable="false"
    />
  );
}

export default MovieCard;
