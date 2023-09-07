import React from "react";
import { Link } from "react-router-dom";
import n from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <div className={n.nav}>
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="logo"
          className={n.logo}
        />
        <ul className={n["nav__ul"]}>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/services">
            <button>Services</button>
          </Link>
          <Link to="/whyus">
            <button>Why Us</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </ul>
        <Link to="/admission">
          <span className={n["nav__admission-btn"]}>Admission</span>
        </Link>
      </div>
    </>
  );
}
