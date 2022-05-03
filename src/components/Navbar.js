import React, { useEffect } from "react";
import logo from "../images/logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import vector from "../images/Vector.png";

function Navbar() {
  const navigate = useNavigate();
  useEffect(() => {
    var element = document.querySelector(".navbar");
    var element2 = document.querySelector(".links");
    var element3 = document.querySelector(".links1");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        element.classList.add("sticky");
        element2.style.color = "green";
        element3.style.color = "green";
      } else {
        element.classList.remove("sticky");
        element2.style.color = "white";
        element3.style.color = "white";
      }
    });
  }, []);
  return (
    <nav className="navbar">
      <div className="left-container">
        <img src={logo} />
        <h3>YANTRA 10.0</h3>
      </div>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" className="links">
            Home
          </NavLink>
        </li>

        <li className="listitem">
          <NavLink activeClassName="active" to="/irc" className="links">
            IRC <img src={vector} />
          </NavLink>
          <div className="dropdown">
            <a>menu1</a>
            <a>menu1</a>
            <a>menu1</a>
            <a>menu1</a>
          </div>
        </li>

        <li>
          <NavLink activeClassName="active" to="/news" className="links1">
            News
          </NavLink>
        </li>

        <li className="listitem">
          <NavLink activeClassName="active" to="/about" className="links">
            About <img src={vector} />
          </NavLink>
          <div className="dropdown">
            <a>menu1</a>
            <a>menu1</a>
            <a>menu1</a>
            <a>menu1</a>
          </div>
        </li>
      </ul>
      <div className="navbuttons">
        <button className="loginbtn" onClick={() => navigate("/login")}>
          Login
        </button>
        <span>or</span>
        <button className="registerbtn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
