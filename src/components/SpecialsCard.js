function SpecialsCard({img, title, price, description, link}) {
    return (
        <article className="specials-card">
            <img src={img} alt={title} />
            <header>
                <h3>{title}</h3>
                <span className="price">{price}</span>
            </header>
            <p>{description}</p>
            <footer>
                <a href={link}>+ Order a delivery</a>
            </footer>
        </article>
    )
}

export default SpecialsCard