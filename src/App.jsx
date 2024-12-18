import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/design/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Header onOpenModal={toggleModal} />

      {/* Page Content */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero
          isModalOpen={isModalOpen}
          onCloseModal={toggleModal}
          onOpenModal={toggleModal}
        />
        <Benefits />
      </div>
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default App;
