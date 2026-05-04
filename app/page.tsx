import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Tours from "./components/Tours";
import CapriMap from "./components/CapriMap";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="hero-spacer" />
      <div className="content-layer">
        <Manifesto />
        <Tours />
        <CapriMap />
        <Reviews />
        <Stats />
        <Footer />
      </div>
    </>
  );
}
