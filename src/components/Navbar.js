import React from "react";
import image from "./kaltak.jpg";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <img src={image} alt="" width={"50px"} height={"50px"} />
        <Link
          className={`navbar-brand fw-bolder text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          to="/"
        >
          AAJ <span className="fw-normal">SE LEKE</span> KAL TAK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/general"
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
          <button
            className={`btn border border-0 btn-outline-${
              props.mode === "light" ? "dark" : "light"
            }`}
            onClick={props.setDarkMode}
          >
            {props.mode === "light" ? (
              <i className="fa-solid fa-lightbulb"></i>
            ) : (
              <i className="fa-regular fa-lightbulb"></i>
            )}
          </button>
          <label
            className={`form-check-label my-2 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
