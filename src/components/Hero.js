import Btn from "./Btn";

function Hero({title, subtitle, description, image}) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                    <Btn text="Reserve a table" link="/reservation" />
                </div>
                <div className="hero-image">
                    <img src={image} alt="Tray of food" />
                </div>
            </div>
        </section>
    )
}

export default Hero