import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <nav>
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={showMenu ? "line line1 open" : "line line1"}></div>
                <div className={showMenu ? "line line2 open" : "line line2"}></div>
                <div className={showMenu ? "line line3 open" : "line line3"}></div>
            </div>
            <ul className={showMenu ? "menu open" : "menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link onClick={() => scrollToSection("about")} to="/#about">About</Link></li>
                <li><Link onClick={() => scrollToSection("specials")} to="/#specials">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link onClick={() => scrollToSection("specials")} to="/#specials">Order Online</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;