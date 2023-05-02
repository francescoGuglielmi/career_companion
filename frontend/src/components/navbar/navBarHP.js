import { Link } from "react-router-dom";
import { useState } from "react";
import "./navBarLP.css";

export default function Navbar({logout, account}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav className="nav">
            <a href="/profile" className="site-title">
                Career Companion
            </a>
            <button className="menu-icon" onClick={toggleMenu}>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line"></span>
            </button>
            <ul className={isMenuOpen ? "menu-open" : ""}>
                <li className="active">
                    <a href="/community">Community</a>
                </li>
                <li>
                    <a href="/interview">Interview Dojo</a>
                </li>
                <li>
                    <a href="/letter">Letter Generator</a>
                </li>
                <li>
                    <a href="/account" onClick={account}>Account</a>
                </li>
                <li>
                    <a href="#" onClick={logout}>Logout</a>
                </li>
            </ul>
        </nav>
    );
}