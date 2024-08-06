import TestimonialsCard from "./TestimonialsCard.js";
import person1 from "../assets/img/person1.jpeg";
import person2 from "../assets/img/person2.jpeg";
import person3 from "../assets/img/person3.jpeg";
import person4 from "../assets/img/person4.jpeg";

const testimonals = [
    {
        id: 1,
        image: person1,
        name: "Anna",
        rating: "4.5",
        comment: "Delicious food and excellent service. Will return soon!"
    },
    {
        id: 2,
        image: person2,
        name: "John",
        rating: "4.0",
        comment: "Cozy atmosphere, exquisite dishes. Highly recommended."
    },
    {
        id: 3,
        image: person3,
        name: "Sarah",
        rating: "5.0",
        comment: "Amazing, my favorite place to eat!"
    },
    {
        id: 4,
        image: person4,
        name: "Bobby",
        rating: "4.0",
        comment: "Fair prices, generous portions. Loved it."
    },
]

function TestimonialsCarousel() {
    return (
        <div className="testimonials-carousel">
            {testimonals.map((testimonial) => {
                return <TestimonialsCard
                    key={testimonial.id}
                    img={testimonial.image}
                    name={testimonial.name}
                    rating={testimonial.rating}
                    comment={testimonial.comment}
                />
            })}
        </div>
    )
}

export default TestimonialsCarousel