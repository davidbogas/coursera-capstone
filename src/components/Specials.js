import Btn from "./Btn"
import SpecialsCarousel from "./SpecialsCarousel"

function Specials() {
    return (
        <section className="specials" id="menu">
            <div className="container">
                <header className="specials-header">
                    <h2 className="section-title">This week specials!</h2>
                    <Btn text="Online Menu" link="/menu" />
                </header>
                <SpecialsCarousel />
            </div>
        </section>
    )
}

export default Specials