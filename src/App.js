import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import MovieList from "./routes/MovieList";
import NowMovie from "./routes/NowMovie";
import Upcoming from "./routes/Upcoming";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieList />} />
        <Route path="/nowmovie" element={<NowMovie />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
