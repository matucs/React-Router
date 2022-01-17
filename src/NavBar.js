import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const handleClick = (route) => {
    token = localStorage.getItem("token");
    token ? navigate(`/${route}`) : navigate(`/login`);
  };
  return (
    <div style={{ borderStyle: "solid" }}>
      <button onClick={() => handleClick("landpage")}>LandPage</button>
      <button onClick={() => handleClick("home")}>Home</button>
      <button onClick={() => handleClick("login")}>Login</button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate(`/login`);
        }}>
        Logout
      </button>
    </div>
  );
};
export default NavBar;
