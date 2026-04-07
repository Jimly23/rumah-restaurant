import Navbar from "@/src/components/Navbar";
import AboutSection from "@/src/sections/About"
import Contact from "@/src/sections/Contact";
import Delivery from "@/src/sections/Delivery";
import Events from "@/src/sections/Events";
import FoodGallery from "@/src/sections/FoodGalery";
import Footer from "@/src/sections/Footer";
import Hero from "@/src/sections/Hero";
import Menu from "@/src/sections/Menu";
import Testimonials from "@/src/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <FoodGallery />
      <Events />
      <Menu />
      <Delivery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
