import logoFooter from "../assets/img/logo_footer.png";

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt='logo' />
            <div>
                <h3>
                    Navigation
                </h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
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
        </footer>
    );
}

export default Footer;