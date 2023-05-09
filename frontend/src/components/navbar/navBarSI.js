import { useState } from "react";
import "./navBarLP.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Career Companion
            </a>
            <button className="menu-icon" onClick={toggleMenu}>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line"></span>
            </button>
            <ul className={isMenuOpen ? "menu-open" : ""}>
                <li className="active">
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/team">Team</a>
                </li>
                <li>
                    <a href="/signup">Sign up</a>
                </li>
            </ul>
        </nav>
    );
}