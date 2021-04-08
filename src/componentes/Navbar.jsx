import React, {useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Card.module.css";

export default function NavBar() {

    const [title,setTitle]=useState("");
    console.log(title);
    function handleChange(e){
        setTitle(e.target.value);
    }
    function handleClick() {
      setTitle("");
    }
   

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Paises
        </NavLink>
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://web.whatsapp.com/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Regiones
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink to="/region/Africa" className="dropdown-item">
                    Africa
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/region/Americas">
                    Americas
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/region/Asia">
                    Asia
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/region/Europe">
                    Europe
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/region/Oceania">
                    Oceania
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="title"
              value={title}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success"
              onClick={handleClick}
            >
              <NavLink className={s.link2} to={`/detalle/${title}`}>
                Search
              </NavLink>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
