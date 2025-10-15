import { NavLink, Link } from "react-router-dom"
import { MdMenu } from "react-icons/md";
import { useState } from "react";

import './MainNavbarDesktop.css'

const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/destination", label: "DESTINATION" },
    { path: "/crew", label: "CREW" },
    { path: "/technology", label: "TECHNOLOGY" }
]

const MainNavbarDesktop = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to={"/"}>
                    <img src="src/assets/shared/logo.svg" />
                </Link>
            </div>

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <MdMenu />
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                {navLinks.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNavbarDesktop