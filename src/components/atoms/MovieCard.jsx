// src/components/atoms/MovieCard.jsx
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./MovieCard.css";

function PortalTeaser({ rect, src, expanded }) {
  const videoRef = useRef(null);
  const attemptsRef = useRef(0);
  const maxAttempts = 6;
  const attemptInterval = 300; 
  const retryTimerRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let mounted = true;

    async function tryPlay() {
      if (!mounted) return;

      if (!v.paused && !v.ended) return;

    
      if (v.readyState < 3) {
        const onCan = () => {
          if (!mounted) return;
          attemptsRef.current = 0; 
          tryPlay();
        };
        v.addEventListener("canplay", onCan, { once: true });
        return;
      }

      try {
        attemptsRef.current += 1;
        const p = v.play();
        if (p !== undefined) {
          await p;
          return;
        }
      } catch (err) {

        if (attemptsRef.current < maxAttempts && mounted) {
          retryTimerRef.current = setTimeout(tryPlay, attemptInterval);
        }
      }
    }

    if (expanded) {
      
      try {
        v.load();
      } catch (e) {}
      attemptsRef.current = 0;
   
      retryTimerRef.current = setTimeout(tryPlay, 30);
    } else {
      
      try {
        v.pause();
      } catch (e) {}
      attemptsRef.current = 0;
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
        retryTimerRef.current = null;
      }
    }

    return () => {
      mounted = false;
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
        retryTimerRef.current = null;
      }
    };
  }, [expanded, src]);

  if (!rect || !src) return null;

  const style = {
    position: "fixed",
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    zIndex: 9999999,
    pointerEvents: "none", 
    transformOrigin: "center bottom",
    transition: "transform 320ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease",
    transform: expanded ? "scale(1.6) translateY(-12px)" : "none",
    opacity: expanded ? 1 : 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  };

  return createPortal(
    <div className="portal-teaser" style={style}>
      <video
        ref={videoRef}
        className="movie-teaser"
        src={src}
        muted
        playsInline
        preload="auto"
        loop
      />
    </div>,
    document.body
  );
}

export default function MovieCard({ movie, onClick }) {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [rect, setRect] = useState(null);


  const hoverDelay = 180; 
  const leaveDelay = 80;
  const hoverTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  useEffect(() => {
    if (expanded && ref.current) {
      const updateRect = () => {
        if (ref.current) setRect(ref.current.getBoundingClientRect());
      };
      updateRect();
      window.addEventListener("scroll", updateRect, { passive: true });
      window.addEventListener("resize", updateRect);
      return () => {
        window.removeEventListener("scroll", updateRect);
        window.removeEventListener("resize", updateRect);
      };
    } else {
      
    }
  }, [expanded]);

  function handleMouseEnter() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
   
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setRect(r);
    }
    hoverTimer.current = setTimeout(() => setExpanded(true), hoverDelay);
  }

  function handleMouseLeave() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setExpanded(false), leaveDelay);
  }

  return (
    <>
      <div
        ref={ref}
        className={`movie-card ${expanded ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick?.(movie)}
        role="button"
        tabIndex={0}
      >
        <div className="poster-wrap">
          <img
            className="movie-poster"
            src={movie.poster}
            alt={movie.title}
            draggable="false"
          />
        </div>
      </div>

      <PortalTeaser rect={rect} src={movie.teaser} expanded={expanded} />
    </>
  );
}
