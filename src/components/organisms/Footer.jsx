import React from "react";
import "./Footer.css";

import FbImg from "../../assets/socials/facebook.png";
import IgImg from "../../assets/socials/instagram.png";
import TwImg from "../../assets/socials/equis.png";
import YtImg from "../../assets/socials/yt.png";

const columns = [
  ["Audio descriptivo", "Relaciones con inversionistas", "Avisos legales"],
  ["Centro de ayuda", "Empleo", "Preferencias de cookies"],
  ["Tarjetas de regalo", "Términos de uso", "Información corporativa"],
  ["Prensa", "Privacidad", "Contáctanos"],
];

function SocialIconImg({ src, alt, label }) {
  return (
    <button className="social-btn" aria-label={label} title={label}>
      <img className="social-img" src={src} alt={alt} width="18" height="18" />
    </button>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-social" role="navigation" aria-label="Redes sociales">
          <SocialIconImg src={FbImg} alt="Facebook" label="Facebook" />
          <SocialIconImg src={IgImg} alt="Instagram" label="Instagram" />
          <SocialIconImg src={TwImg} alt="Twitter" label="Twitter" />
          <SocialIconImg src={YtImg} alt="YouTube" label="YouTube" />
        </div>

        <div className="footer-links">
          {columns.map((col, i) => ( 
            <ul key={i} className="footer-col" aria-label={`Columna ${i + 1}`}> 
              {col.map((link, idx) => ( 
                <li key={idx}><a href="#" onClick={(e)=>e.preventDefault()}>{link}</a></li>/* prevenir navegación real */
              ))}
            </ul>
          ))}
        </div>

        <div className="footer-bottom">
          <small>© {year} NeTfLiX — Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}