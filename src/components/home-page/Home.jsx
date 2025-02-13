import "./home.css";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Products from "./products/Products";
import Order from "./order/Order";
import Footer from "./footer/Footer";
export default function Home() {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Products />
            <Order />
            <Footer />
        </div>
    );
}
