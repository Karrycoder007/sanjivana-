import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/Productlist";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <ProductList/>
    <Contact/>
    
    </>
  );
}
