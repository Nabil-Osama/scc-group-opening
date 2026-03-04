import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BigFiveOffer from './components/BigFiveOffer';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="particles">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <main>
        <Hero />
        <BigFiveOffer />
        <About />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
