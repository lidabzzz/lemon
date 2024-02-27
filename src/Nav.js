import React, { useState } from 'react';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={showMenu ? "line line1 open" : "line line1"}></div>
                <div className={showMenu ? "line line2 open" : "line line2"}></div>
                <div className={showMenu ? "line line3 open" : "line line3"}></div>
            </div>
            <ul className={showMenu ? "menu open" : "menu"}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#orderonline">Order Online</a></li>
            </ul>
        </nav>
    );
}

export default Nav;