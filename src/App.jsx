import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/design/Footer";
import { ContactMe } from "./components/design/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefits />
        <ContactMe />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
