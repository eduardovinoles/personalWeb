import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true, // Pagination dots
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1, // Show one card at a time
    slidesToScroll: 1,
    arrows: false, // Optional: Use dots instead of arrows
    autoplay: true, // Automatically slide
    autoplaySpeed: 5000, // 4 seconds
  };

  return (
    <div className="max-w-5xl mx-auto z-1 p-0.5 rounded-2xl">
      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-5xl mx-auto z-1 p-0.5 rounded-2xl bg-conic-gradient flex flex-col items-center text-left"
            >
              <div className="relative bg-n-8 rounded-[1rem]  px-8 py-8">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <div className="flex flex-col items-start p-5">
                    <h5 className="font-bold text-lg mb-0">
                      {testimonial.name}
                    </h5>
                    <p className="italic text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p>
                  {testimonial.opinion.split("<br />").map((line, idx) => (
                    <span
                      key={idx}
                      style={{ display: "block", marginLeft: "1em" }}
                    >
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
