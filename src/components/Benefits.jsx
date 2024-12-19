import { benefits } from "../constants";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight, BackgroundCircles2 } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from "react";
import { Modal, VideoModal } from "../components/design/Detail";
import { Card } from "../components/design/Card";
import {
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work1BG,
  work2BG,
  work3BG,
  work4BG,
  work5BG,
  work6BG,
  work1Icons,
  work2Icons,
  work3Icons,
  work4Icons,
  work5Icons,
  work6Icons,
  moreComming,
  testimonials,
} from "../constants";
import TestimonialSlider from "./design/Testimonial";

const Benefits = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMoreModalOpen, setMoreModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const cardAssets = {
    work1: { background: work1BG, images: work1, icons: work6Icons },
    work2: { background: work2BG, images: work2, icons: work2Icons },
    work3: { background: work3BG, images: work3, icons: work3Icons },
    work4: { background: work4BG, images: work4, icons: work4Icons },
    work5: { background: work5BG, images: work5, icons: work5Icons },
    work6: { background: work6BG, images: work6, icons: work6Icons },
  };

  const openModal = (id) => {
    setSelectedCardId(id);
    setModalOpen(true);
  };

  const openVideoModal = (id) => {
    setMoreModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCardId(null);
    setModalOpen(false);
  };

  const closeMoreModal = () => {
    setMoreModalOpen(false);
  };

  const closeFormModal = () => {
    setFormOpen(false);
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="mywork"
    >
      {/* Modals*/}
      <Modal id={selectedCardId} isOpen={isModalOpen} onClose={closeModal}>
        {selectedCardId && (
          <Card
            title={"Tech"}
            icons={cardAssets[selectedCardId].icons}
            alt={selectedCardId}
            images={cardAssets[selectedCardId].images[0]} // First image for main
            additionalImages={cardAssets[selectedCardId].images} // All images for thumbnails
            background={cardAssets[selectedCardId].background}
          />
        )}
      </Modal>

      <VideoModal
        isOpen={isMoreModalOpen}
        onClose={closeMoreModal}
        videoUrl={moreComming}
      />
      {/* */}

      <div className="container relative z-2">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            My Wor
            <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              k
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            A collection of projects I've worked
            <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              &nbsp;on&nbsp;
            </span>{" "}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: item.backgroundUrl
                  ? `url(${item.backgroundUrl})`
                  : "none",
              }}
              key={item.id}
              onClick={() => {
                console.log(item.backgroundUrl);
                if (item.id === "work6") {
                  openVideoModal();
                } else {
                  openModal(item.id);
                }
              }}
              // Pass the card ID on click
            >
              <div className="relative z-2 flex flex-col justify-between min-h-[27rem] p-[2.4rem] pointer-events-none">
                {/* Title and Description */}
                <div>
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                </div>

                {/* Bottom Content */}
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>

        <div
          id="testimonials"
          className="py-16 relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]"
        >
          <h1 className="h1 mb-6">
            They&nbsp;
            <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Say
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            People I've worked with have said some
            <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              &nbsp;nice things&nbsp;
            </span>
            ...
          </p>
          <div className="pt-14">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </div>

      <BackgroundCircles2 />
    </Section>
  );
};

export default Benefits;
