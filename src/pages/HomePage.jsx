import { useState , useMemo} from "react";
import Header from "../components/organisms/Header.jsx";
import Row from "../components/molecules/Rows.jsx";
import moviesData from "../data/movies.js";
import Spotlight from "../components/organisms/Spotlight.jsx";
import Footer from "../components/organisms/Footer.jsx";


function HomePage() {
  const movies = useMemo(() => moviesData, []);

  const moviesForContinue = useMemo(() => (
    movies.map(m => ({
      ...m,
      progress: Math.floor(Math.random() * 101)
    }))
  ), [movies]);

  const movies1 = useMemo(() => [...movies].sort(() => Math.random() - 0.5), [movies]);
  const movies2 = useMemo(() => [...movies].sort(() => Math.random() - 0.5), [movies]);
  const movies3 = useMemo(() => [...movies].sort(() => Math.random() - 0.5), [movies]);
  const movies4 = useMemo(() => [...movies].sort(() => Math.random() - 0.5), [movies]);
  const movies5 = useMemo(() => [...movies].sort(() => Math.random() - 0.5), [movies]);

  const [selectedMovie, setSelectedMovie] = useState(movies[0] ?? null);
  
  return (
    <>
      <Header />
      <main className="main-content">
        <Spotlight movie={selectedMovie} />

        <Row title="Continuar viendo" movies={moviesForContinue} onSelectMovie={setSelectedMovie} />
        <Row title="Favoritos del público" movies={movies1} onSelectMovie={setSelectedMovie} />
        <Row title="Populares en tu país" movies={movies2} onSelectMovie={setSelectedMovie} />
        <Row title="Originales de Netflix" movies={movies3} onSelectMovie={setSelectedMovie} />
        <Row title="Lo nuevo en netflix" movies={movies4} onSelectMovie={setSelectedMovie} />
        <Row title="Creeremos que estos te encantaran" movies={movies5} onSelectMovie={setSelectedMovie} />

      </main>
      <Footer />
    </>
  );
}

export default HomePage;
