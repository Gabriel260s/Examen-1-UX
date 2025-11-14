import "./Spotlight.css";

function Spotlight({ movie }) {
  return (
    <section className="spotlight no-bg">
      <div className="spotlight-content">
        <h1 className="spotlight-title">{movie.title}</h1>
        <p className="spotlight-desc">{movie.description}</p>

        <div className="spotlight-buttons">
          <button className="spotlight-btn play">▶ Reproducir</button>
          <button className="spotlight-btn info">ℹ Más información</button>
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
