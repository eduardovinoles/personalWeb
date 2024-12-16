import React from "react";
import { companyLogos } from "../constants";
import { BackgroundCircles2 } from "./design/Benefits";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} relative`}>
      {/* Content Section */}
      <div className="relative z-10">
        <div className="columns-container">
          <p className="column body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I am a dedicated iOS developer with extensive experience in native
            mobile development, specializing in Swift, UIKit, and SwiftUI. My
            expertise extends to React Native, enabling me to deliver seamless
            cross-platform applications.
            <br />
            <br />
            In addition to mobile development, I have a solid foundation in web
            technologies, including JavaScript, TypeScript, HTML, CSS, and
            frameworks such as React, Vue.js, Bootstrap, and Node.js.
            <br />
            <br /> My backend proficiency includes working with Prisma,
            Serverless architectures, and AWS, allowing me to contribute
            effectively across the full stack.
          </p>
          <p className="column body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I thrive in Agile environments, leveraging these methodologies to
            ensure efficient project delivery and adherence to industry best
            practices.
            <br />
            <br /> My proactive approach to learning drives me to stay ahead of
            emerging trends, continuously refining my skills to meet the
            evolving demands of the IT market.
            <br />
            <br />
            With a focus on crafting intuitive, high-performance applications
            and a strong commitment to quality, I am eager to tackle challenging
            projects and make a meaningful impact.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-4">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 min-w-[45%] max-w-[45%] h-[8.5rem] animate-floating hover:animate-none md:min-w-[auto] md:max-w-[auto]"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={logo} width={134} height={58} alt={logo} />
            </li>
          ))}
        </ul>
      </div>

      {/* BackgroundCircles2 */}
      <div className="absolute inset-0 -z-10">
        <BackgroundCircles2 />
      </div>
    </div>
  );
};

export default CompanyLogos;
