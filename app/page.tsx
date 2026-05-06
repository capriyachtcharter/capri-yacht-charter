import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Tours from "./components/Tours";
import BeyondTours from "./components/BeyondTours";
import CapriMap from "./components/CapriMap";
import Fleet from "./components/Fleet";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="hero-spacer" />
      <div className="content-layer">
        <Tours />
        <BeyondTours />
        <CapriMap />
        <Fleet />
        <Manifesto />
        <Reviews />
        <Footer />
      </div>
      <ScrollReveal />
    </>
  );
}
