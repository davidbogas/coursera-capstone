import marioAndAdrianA from "../assets/img/mario_adrian_a.webp";
import marioAndAdrianB from "../assets/img/mario_adrian_b.webp";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2 className="section-title">Our Story</h2>
                        <p className="about-text">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                        <p className="about-text">To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                    </div>
                    <div className="column about-image-wrapper">
                        <img className="about-image front" src={marioAndAdrianA} alt="restaurant" /> 
                        <img className="about-image rear" src={marioAndAdrianB} alt="restaurant" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About