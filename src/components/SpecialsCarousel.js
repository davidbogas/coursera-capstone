import SpecialsCard from "./SpecialsCard";
import GreekSalad from "../assets/img/greek_salad.webp";
import Bruschetta from "../assets/img/bruschetta.webp";
import Fish from "../assets/img/fish.webp";
import Pasta from "../assets/img/pasta.webp";
import Chicken from "../assets/img/chicken_parmesan.jpg";

var specials = [
    {
        id: 1,
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese.garnished with crunchy garlic and rosemary croutons.",
        image: GreekSalad,
        link: "#"
    },
    {
        id: 2,
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: Bruschetta,
        link: "#"
    },
    {
        id: 3,
        title: "Grilled Bass",
        price: "$13.99",
        description: "Fresh grilled bass, with herbs and lemon and a side of roasted potatoes.",
        image: Fish,
        link: "#"
    },
    {
        id: 4,
        title: "Macaroni alla bolognese",
        price: "$8.99",
        description: "Our pasta is made from fresh pasta that has been cooked with a tomato sauce and garlic.",
        image: Pasta,
        link: "#"
    },
    {
        id: 5,
        title: "Chicken Parmesan",
        price: "$7.99",
        description: "Our chicken parmesan is made from fresh chicken breast that has been cooked with a tomato sauce and garlic.",
        image: Chicken,
        link: "#"
    },
]

function SpecialsCarousel() {
    return (
        <div className="specials-carousel">
            {specials.map((special) => {
                return <SpecialsCard
                    key={special.id}
                    img={special.image}
                    title={special.title}
                    price={special.price}
                    description={special.description}
                    link={special.link}
                />
            })}
        </div>
    )
}

export default SpecialsCarousel