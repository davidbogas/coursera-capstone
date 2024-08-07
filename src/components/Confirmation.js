import { useNavigate, useLocation } from "react-router-dom";
import Btn from "./Btn";

function Confirmation() {

    const { formData } = useLocation().state || {};

    return (
        <section className="confirmation">
            <header className="section-header">
                <h2 className="section-title">Thank you for your reservation, {formData.name}!</h2>
            </header>
            <div style={{ padding: '2rem', minHeight: '450px' }}>
                <h3 style={{ fontSize: '2rem', maxWidth: '1200px', margin: '0 auto' }}>We will send you a confirmation email with all the details.</h3>
                <div style={{ paddingTop: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <Btn text="Back to Home" link="/" />
                </div>
            </div>
        </section>
    );
}

export default Confirmation;