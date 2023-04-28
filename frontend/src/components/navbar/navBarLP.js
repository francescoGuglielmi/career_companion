import { Link } from "react-router-dom";
import { useState } from "react";
import "./navBarLP.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // new state variable for login status

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        // handle logout logic and set isLoggedIn to false
        setIsLoggedIn(false);
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
                {isLoggedIn ? ( // show logout and profile links if user is logged in
                    <>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/" onClick={handleLogout}>Logout</a>
                        </li>
                    </>
                ) : ( // show login and signup links if user is not logged in
                    <>
                        <li>
                            <a href="/signup">Sign up</a>
                        </li>
                        <li>
                            <a href="/login">Sign in</a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
