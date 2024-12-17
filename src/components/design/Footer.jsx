import { color } from "framer-motion";
import React from "react";
import { BottomLine } from "./Hero";
import { BackgroundCircles2 } from "./Benefits";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-0.25 bg-gray-500/20">
        {" "}
        {/* <BackgroundCircles2 /> */}
      </div>
      <p className="body-1 max-w-3xl mx-auto text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent lg:mb-8 pt-10 pb-10">
        Handcrafted by me <span className="m-2">&copy;</span> twentytwentyfour
      </p>
    </footer>
  );
};

export default Footer;
