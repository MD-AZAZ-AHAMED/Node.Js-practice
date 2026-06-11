import React, { useState } from "react";

import Classes from "../Styles/NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={Classes.Navbar}>
        <div className={Classes.brand}>
          <h1 className={Classes.NavLogo}>
            Pacific <span>Aviation</span>
          </h1>

          <div className={Classes.hamburger}>
            {toggle ? (
              <FontAwesomeIcon
                icon={faClose}
                className={Classes.menuIcon}
                onClick={() => setToggle(false)}
              />
            ) : (
              <FontAwesomeIcon
                className={Classes.menuIcon}
                icon={faBars}
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>

        <ul className={toggle ? Classes.open : ""}>
          <li>
            <a href="#hero" className={Classes.active}>
              home
            </a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#recommendation">places</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
        </ul>

    {/* Updated connect button with an inner glow element for animations */}
    <button className={Classes.NavBtn}>
    <span>connect</span>
    <div className={Classes.btnGlow}></div>
    </button>
      </nav>
    </>
  );
}

export default NavBar;
