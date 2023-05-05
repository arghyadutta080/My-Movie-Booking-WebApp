import MovieState from "./context/movie/MovieState";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <MovieState>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </MovieState>
  );
}

export default App;
