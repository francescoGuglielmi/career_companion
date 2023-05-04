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
                    <a href="/#">Community</a>
                </li>
                <li>
                    <a href="/interview">Interview Dojo</a>
                </li>
                <li>
                    <a href="/generator">Letter Generator</a>
                </li>
                <li>
                    <a href="/account" onClick={account}>Account</a>
                </li>
                <li>
                    <a href="/login" onClick={logout}>Logout</a>
                </li>
            </ul>
        </nav>
    );
}



// UNCOMMENT BELOW TO TRY A DIFFERENT NAVBAR MENU



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./navBarHP.css";

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const logout = () => {
//         window.localStorage.removeItem("token");
//     };

//     return (
//         <header>
//             <nav className="nav">
//                 <a href="/" className="site-title nav-branding">
//                     Career Companion
//                 </a>
//                 {/* <button className="menu-icon" onClick={toggleMenu}>
//                     <span className="menu-icon__line"></span>
//                     <span className="menu-icon__line"></span>
//                     <span className="menu-icon__line"></span>
//                 </button> */}
//                 <ul className={(isMenuOpen ? "active" : "") + " nav-menu"} onClick={toggleMenu}>
//                     <li className="active nav-item">
//                         <a className="nav-link font-dm-sans-bold" href="/Profile">Profile</a>
//                     </li>
//                     <li className="nav-item" >
//                         <a className="nav-link font-dm-sans-bold" href="/interview">Interview Dojo</a>
//                     </li>
//                     <li className="nav-item" >
//                         <a className="nav-link font-dm-sans-bold" href="/generator">Letter Generator</a>
//                     </li>
//                     <li className="nav-item" >
//                         <a className="nav-link font-dm-sans-bold" href="/feedback">Reviews</a>
//                     </li>
//                     <li className="nav-item">
//                     <img className="logout-icon" src='/logout.png'/>
//                     <a className="nav-link font-dm-sans-bold" href="/login" onClick={logout}>Logout</a>
//                     </li>
//                 </ul>
//                 <div className={(isMenuOpen ? "active" : "") + " hamburger"} onClick={toggleMenu}>
//                     <span className="bar"></span>
//                     <span className="bar"></span>
//                     <span className="bar"></span>
//                 </div>
//             </nav>
//         </header>
//     );
// }