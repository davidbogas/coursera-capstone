import Navbar from "./Navbar";
import logoHeader from "../assets/img/logo_header.png";

function Header() {
    return (
        <header>
            <img src={logoHeader} alt='logo' style={{width: '250px'}} />
            <Navbar />
        </header>
    );
}

export default Header;