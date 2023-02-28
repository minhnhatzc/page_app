import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <div className="navbar__header">
        <div className="navbar__header__list">
          <ul className="navbar__list">
            <li className="nav__item">
              <Link to="/all" activeStyle className="nav__item__link">
                All
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/supply" activeStyle className="nav__item__link">
                Manpower Supply
              </Link>
            </li>
            <li className="nav__item" >
              <Link to="/mobile" activeStyle className="nav__item__link">
                Mobile App
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/design" activeStyle className="nav__item__link">
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
