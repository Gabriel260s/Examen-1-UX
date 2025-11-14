import MovieCard from "../atoms/MovieCard.jsx";
import "./Rows.css";

function Row({ title = "Título", movies = [] }) {
  if (!movies || movies.length === 0) return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">No hay películas</div>
    </section>
  );

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </section>
  );
}

export default Row;
