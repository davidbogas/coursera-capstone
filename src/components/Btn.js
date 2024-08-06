import { Link } from "react-router-dom";

function Btn({text, link}) {
    return (
        <Link to={link} className="btn">{text}</Link>
    )
}

export default Btn