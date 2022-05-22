import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicOnlyRoute from "./middleware/PublicOnlyRoute";
import ProtectedRoute from "./middleware/ProtectedRoute";
import ShowAllUsers from "./components/ShowAllUsers";
import ShowAllBooks from "./components/ShowAllBooks";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute component={<Home />} />}
        ></Route>
        <Route path="/users" element={<ShowAllUsers />} />
        <Route
          path="/books"
          element={<ProtectedRoute component={<ShowAllBooks />} />}
        />
        <Route
          path="/login"
          element={<PublicOnlyRoute component={<Login />} />}
        ></Route>
        <Route
          path="/register"
          element={<PublicOnlyRoute component={<Register />} />}
        ></Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
