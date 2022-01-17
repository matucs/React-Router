import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LandPage from "./LandPage";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate(`/login`);
  }, [location]);
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/*" element={<LandPage />} />
        <Route path="home/*" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
