// src/App.jsx
import { Routes, Route } from "react-router-dom";

// User pages
import Contact from "./users/Contact";
import Login from "./users/Login";
import { Movie } from "./users/Movie";
import { Movies } from "./users/Movies";
import { Dashboard } from "./admin/Dashboard";

// Admin pages
import { Users } from "./admin/Users";

// Layouts
import { UserLayout } from "./layout/UserLayout";

// Private route
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      {/* User routes */}
      <Route path="/" element={<UserLayout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movie/:id" element={<Movie />} />
      </Route>

      {/* Admin routes */}
      <Route
        path="/admin/users"
        element={<PrivateRoute component={<Users />} sysRole={["admin"]} />}
      />
      <Route
  path="/admin/dashboard"
  element={<PrivateRoute component={<Dashboard />} sysRole={["admin"]} />}
/>


      {/* Optional: Add a catch-all for 404 */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default App;
