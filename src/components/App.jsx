import { NavLink, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:/movieId" element={<div>Movie</div>} />
      </Routes>
    </div>
  );
};
