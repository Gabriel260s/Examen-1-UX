import { useState } from "react";
import Header from "../components/organisms/Header.jsx";
import Row from "../components/molecules/Rows.jsx";
import movies from "../data/movies.js";
import Spotlight from "../components/organisms/Spotlight.jsx";

function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0] ?? null);

  return (
    <>
      <Header />
      <main className="main-content">
        <Spotlight movie={selectedMovie} />

        <Row title="Continuar" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Favoritos del público" movies={movies} onSelectMovie={setSelectedMovie} />
        <Row title="Tendencias" movies={movies} onSelectMovie={setSelectedMovie} />
      </main>
    </>
  );
}

export default HomePage;
