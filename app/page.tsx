import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Tours from "./components/Tours";
import MiniCruises from "./components/MiniCruises";
import BeyondTours from "./components/BeyondTours";
import Fleet from "./components/Fleet";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import ConciergeFab from "./components/ConciergeFab";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="hero-spacer" />
      <div className="content-layer">
        <Tours />
        <MiniCruises />
        <BeyondTours />
        <Fleet />
        <Manifesto />
        <Reviews />
        <Footer />
      </div>
      <ScrollReveal />
      <ConciergeFab />
    </>
  );
}
