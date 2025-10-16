import { NavLink, Link } from "react-router-dom"
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

import './MainNavbar.css'

const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/destination", label: "DESTINATION" },
    { path: "/crew", label: "CREW" },
    { path: "/technology", label: "TECHNOLOGY" }
]

const MainNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo-box">
                <Link to={"/"}>
                    <img src="/src/assets/shared/logo.svg" className="logo" alt="Logo" />
                </Link>
            </div>

            <div className="hamburger-box">
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            <ol start="0"
                className={`nav-links text-preset-8 ${menuOpen ? "active" : ""}`}>
                {navLinks.map(link => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default MainNavbar
