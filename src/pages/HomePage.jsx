import { useState } from "react";
import Header from "../components/organisms/Header.jsx";
import Row from "../components/molecules/Rows.jsx";
import movies from "../data/movies.js";
import Spotlight from "../components/organisms/Spotlight.jsx";
import Footer from "../components/organisms/Footer.jsx";


function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0] ?? null);

  return (
    <>
      <Header />
      <main className="main-content">
        <Spotlight movie={selectedMovie} />

        <Row title="Continuar viendo" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Favoritos del público" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Populares en tu país" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Originales de Netflix" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Lo nuevo en netflix" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Creeremos que estos te encantaran" movies={movies} onSelectMovie={setSelectedMovie} />

      </main>
      <Footer />
    </>
  );
}

export default HomePage;
