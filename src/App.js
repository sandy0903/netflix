import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./page/Signup";
import Login from "./page/Login";

import Home from "./page/Home";
import Movie from "./components/Movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Login />} />
        <Route path="home" element={<Home />} />


      </Routes>
    </Router>
  );
}

export default App;
