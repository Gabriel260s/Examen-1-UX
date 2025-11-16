import "./Spotlight.css";

function SpotlightInfo({ movie }) {
  if (!movie) return null;

  return (
    <div className="spotlight-info">
      <h1 className="spotlight-title">{movie.title}</h1>
      <p className="spotlight-desc">{movie.description}</p>

      <div className="spotlight-buttons">
        <button className="btn play">▶ Reproducir</button>
        <button className="btn info">ℹ Más información</button>
      </div>
    </div>
  );
}

export default SpotlightInfo;
