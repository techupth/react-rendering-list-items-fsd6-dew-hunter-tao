import "./App.css";
import MoviesListSection from "./components/MoviesListSection.jsx"

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className = "movie-list-heading">Movie List Section</h1>
        <MoviesListSection />
      </section>
    </div>
  );
}

export default App;
