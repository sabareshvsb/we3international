import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <WhyChoose />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Stats />
    </>
  );
}