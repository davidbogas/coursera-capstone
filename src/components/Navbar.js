import logoHeader from "../assets/img/logo_header.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <NavLink to="/"><img src={logoHeader} alt='logo' className="logo-header" /></NavLink>
            <div className="burger-menu" onClick={toggleMenu}>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E" alt="menu" />
            </div>
            <ul className={ isOpen ? 'nav open' : 'nav' }>
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li><NavLink to="/menu" className="nav-link">Menu</NavLink></li>
                <li><NavLink to="/reservation" className="nav-link">Reservation</NavLink></li>
                <li><NavLink to="/order" className="nav-link">Order online</NavLink></li>
                <li><NavLink to="/login" className="nav-link">Log in</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar