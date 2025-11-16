import "./HeroImage.css";

function HeroImage({ movie }) {
  if (!movie) return null;

  return (
    <div className="hero-image">
      <img src={movie.backdrop} alt={movie.title} className="hero-img" />
      <div className="hero-overlay"></div>
    </div>
  );
}

export default HeroImage;
