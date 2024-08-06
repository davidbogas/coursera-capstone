import logoFooter from "../assets/img/logo_footer.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
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
                    <p>Email: info@food-delivery.com</p>
                    <p>Phone: +1 (555) 555-5555</p>
                </div>
                <div>
                    <h3>
                        Social
                    </h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;