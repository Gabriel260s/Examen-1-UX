import { useRef } from "react";
import MovieCard from "../atoms/MovieCard.jsx";
import "./Rows.css";

function Row({ title = "Título", movies = [], onSelectMovie, maxVisible = 6 }) {

  const scrollerRef = useRef(null);

  if (!movies || movies.length === 0) return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">No hay películas</div>
    </section>
  );


  function handlePrev() {
    const el = scrollerRef.current;
  
    el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  }
  function handleNext() {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  }

  return (
    <section className="row" style={{ ["--cards-per-row"]: maxVisible }}>
      <div className="row-header">
        <h2 className="row-title">{title}</h2>

        <div className="row-controls">
          <button className="row-btn prev" onClick={handlePrev} aria-label="Anterior">‹</button>
          <button className="row-btn next" onClick={handleNext} aria-label="Siguiente">›</button>
        </div>
      </div>

      <div className="row-cards" ref={scrollerRef}>
        {movies.map(m => (
          <div className="row-item" key={m.id}>
            <MovieCard
              movie={m}
              onClick={() => onSelectMovie?.(m)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Row;
