import { useNavigate, useLocation } from "react-router-dom";
import Btn from "./Btn";

function Confirmation() {

    const { formData } = useLocation().state || {};

    return (
        <section className="confirmation">
            <header className="section-header">
                <h2 className="section-title">Thank you for your reservation, {formData.name}!</h2>
                <h3>We will send you a confirmation email with all the details.</h3>
                <div style={{ paddingTop: '2rem' }}>
                    <Btn text="Back to Home" link="/" />
                </div>
            </header>
        </section>
    );
}

export default Confirmation;