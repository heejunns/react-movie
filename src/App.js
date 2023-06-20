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
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/:id"} element={<MovieList />} />
        <Route
          path={process.env.PUBLIC_URL + "/nowmovie"}
          element={<NowMovie />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/upcoming"}
          element={<Upcoming />}
        />
        <Route
          path={process.env.PUBLIC_UR + `/movie/:id`}
          element={<Detail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
