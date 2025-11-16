import { useState, useRef, useEffect } from "react";
import "./MovieCard.css";

function MovieCard({ movie, onClick }) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoError, setVideoError] = useState(null);
  const hoverTimer = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // cuando se colapsa, reiniciamos el video
    if (!expanded && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) { }
    }
  }, [expanded]);

  useEffect(() => {
    // reproduce el video
    if (expanded && videoRef.current) {
      setVideoError(null);
      setLoading(true);

      //intenta cargar y reproducir
      try {
        videoRef.current.load();

        // cuando pueda reproducir, intenta play()
        const onCanPlay = async () => {
          setLoading(false);
          try {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              await playPromise;
            }
          } catch (err) {
            console.warn("video.play() fallo:", err);
            setVideoError(err?.message || "play failed"); // muestra el error
          }
        };

        const onError = (ev) => {
          console.error("video error event:", ev);
          setLoading(false);
          setVideoError("Error cargando el video");
        };

        videoRef.current.addEventListener("canplay", onCanPlay, { once: true });
        videoRef.current.addEventListener("error", onError, { once: true });
      } catch (e) {
        console.error("Error preparando video:", e);
        setLoading(false);
        setVideoError(e?.message || "error");
      }
    }
  }, [expanded]);

  function handleMouseEnter() {
    hoverTimer.current = setTimeout(() => setExpanded(true), 350);
  }

  function handleMouseLeave() {
    clearTimeout(hoverTimer.current);
    setExpanded(false);
  }

  function handleClick(e) {
    onClick?.(e);
  }

  return (
    <div
      className={`movie-card ${expanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalle de ${movie?.title}`}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(e); }}
      draggable="false"
    >
      <img
        className="movie-poster"
        src={movie.poster}
        alt={movie.title || "poster"}
        draggable="false"
        aria-hidden={expanded}
      />
      {movie.progress !== undefined && (
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: movie.progress + "%" }}
          ></div>
        </div>
      )}

      {expanded && (
        <div className="teaser-wrapper">
          {movie.teaser ? (
            <>
              <video
                ref={videoRef}
                className="movie-teaser"
                src={movie.teaser}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              // controls={true} // descomenta solo para debug
              />
              {loading && <div className="teaser-status">Cargando...</div>}
              {videoError && <div className="teaser-status error">Error: {videoError}</div>}
            </>
          ) : (
            <div className="teaser-status">No hay teaser</div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieCard;