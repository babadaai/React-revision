import { Routes, Route } from "react-router-dom";

// User pages
import Contact from "../pages/user/Contact";
import Login from "../pages/user/Login";
import Movie from "../pages/user/Movie";
import Movies from "../pages/user/Movies";

// Admin pages
import Users from "../pages/admin/Users";

// Layouts
import UserLayout from "../layouts/UserLayout";

// Error page
import ErrorPage from "../pages/ErrorPage";
import { PrivateRoute } from "../components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      {/* User Normal Routes */}
      <Route path="/" element={<UserLayout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movie/:id" element={<Movie />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin">
        <Route path="users" element={
            <PrivateRoute>
            <Users />
            </PrivateRoute>
             } />
      </Route>

      {/* Error Handling */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;