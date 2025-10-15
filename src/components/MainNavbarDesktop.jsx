import { NavLink, Link } from "react-router-dom"

const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/destination", label: "DESTINATION" },
    { path: "/crew", label: "CREW" },
    { path: "/technology", label: "TECHNOLOGY" }
]

const MainNavbarDesktop = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to={"/"}>--LOGO--</Link>
            </div>

            

            <ul>
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