import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import vector from "../../images/Vector.png";

function Navbar() {
  const navigate = useNavigate();
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    var element = document.querySelector(".navbar");
    var element2 = document.querySelector(".links");
    var element3 = document.querySelector(".link1");
    var element4 = document.querySelector(".link2");
    var element5 = document.querySelector(".link3");
    // var element6 = document.querySelector(".active");
    var element7 = document.querySelector(".dropdown");
    var element8 = document.querySelector(".dropdown1");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setShowIcon(true);
        element.classList.add("sticky");
        element2.classList.add("link-change");
        element3.classList.add("link-change");
        element4.classList.add("link-change");
        element5.classList.add("link-change");
        // element6.classList.add("link-border");
        element7.classList.add("dropdown-toggler");
        element8.classList.add("dropdown-toggler");
        // console.log(element7);
        // element2.style.color = "green";
        // element3.style.color = "green";
      } else {
        setShowIcon(false);
        element.classList.remove("sticky");
        element2.classList.remove("link-change");
        element3.classList.remove("link-change");
        element4.classList.remove("link-change");
        element5.classList.remove("link-change");
        // element6.classList.remove("link-border");
        element7.classList.remove("dropdown-toggler");
        element8.classList.remove("dropdown-toggler");
      }
    });
    console.log(window.pageYOffset);
  }, [window.location.href]);

  useEffect(() => {
    console.log(window.pageYOffset);
  }, [window.location.href]);
  return (
    <nav className="navbar">
      <div
        className="left-container"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} />
        <h3>YANTRA 9.0</h3>
      </div>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" className="links">
            Home
          </NavLink>
        </li>

        <li className="listitem">
          <NavLink activeClassName="active" to="/irc" className="link1">
            Yantra {!showIcon && <img src={vector} />}{" "}
            {showIcon && <FiChevronDown className="listitem-icon" />}
          </NavLink>
          <div className="dropdown">
            <Link to="/yantra2">Yantra 8.0</Link>
            <Link to="/yantra3">Yantra 7.0 </Link>
            <Link to="/yantra4">Yantra 6.0</Link>
            <Link to="/yantra4">Yantra 5.0</Link>
            <Link to="/yantra4">Yantra 4.0</Link>
            <Link to="/yantra4">Yantra 3.0</Link>
            <Link to="/yantra4">Yantra 2.0</Link>
            <Link to="/yantra4">Yantra 1.0</Link>
          </div>
        </li>

        <li>
          <NavLink activeClassName="active" to="/news" className="link2">
            News
          </NavLink>
        </li>

        <li className="listitem">
          <NavLink activeClassName="active" to="/about" className="link3">
            About {!showIcon && <img src={vector} />}{" "}
            {showIcon && <FiChevronDown className="listitem-icon" />}
          </NavLink>
          <div className="dropdown dropdown1">
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
