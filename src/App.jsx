import "./App.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <MovieProvider>
        <div>
          <h1>Movie List</h1>
          <MovieList />
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
