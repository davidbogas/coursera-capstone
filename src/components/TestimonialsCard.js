import star from "../assets/img/star.png";

function TestimonialsCard({img, name, rating, comment}) {
    return (
        <article className="testimonials-card">
            <img src={img} alt={name} className="testimonials-card-avatar" />
            <header>
                <h3>{name}</h3>
                <span className="rating">{rating} <img className="testimonials-card-star" src={star} alt="stars" /></span>
            </header>
            <p>"{comment}"</p>
        </article>
    )
}

export default TestimonialsCard