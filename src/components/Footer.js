import logoFooter from "../assets/img/logo_footer_bw.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={logoFooter} alt='logo' />
                <div>
                    <h3>
                        Navigation
                    </h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservation">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Contact
                    </h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faLocationDot} /> 123 Main Street, Chicago USA</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> info@littlelemon.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> +1 (555) 555-5555</li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Social
                    </h3>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="footer-icon" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="footer-icon" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} className="footer-icon" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;