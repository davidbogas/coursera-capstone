import logoHeader from "../assets/img/logo_header.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <NavLink to="/"><img src={logoHeader} alt='logo' className="logo-header" /></NavLink>
            <div className="burger-menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={ isOpen ? 'nav open' : 'nav' }>
                <li><NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link" onClick={toggleMenu}>About</NavLink></li>
                <li><NavLink to="/menu" className="nav-link" onClick={toggleMenu}>Menu</NavLink></li>
                <li><NavLink to="/reservation" className="nav-link" onClick={toggleMenu}>Reservation</NavLink></li>
                <li><NavLink to="/order" className="nav-link" onClick={toggleMenu}>Order online</NavLink></li>
                <li><NavLink to="/login" className="nav-link" onClick={toggleMenu}>Log in</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar