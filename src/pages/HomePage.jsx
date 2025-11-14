import Header from "../components/organisms/Header.jsx";
import Row from "../components/molecules/Rows.jsx";
import movies from "../data/movies.js";

function HomePage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Row title="Continuar" movies={movies} />
        <Row title="Favoritos del público" movies={movies} />
        <Row title="Tendencias" movies={movies} />
      </main>
    </>
  );
}

export default HomePage;
