import heroImage from "../assets/img/restaurant_food.webp";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Main() {
    return (
        <main>
            <Hero
            title="Little Lemon"
            subtitle="Chicago"
            description="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
            image={heroImage}
            />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}

export default Main;