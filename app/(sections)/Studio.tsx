import AnimatedDiv from "@/components/animation/animated-div";
import AnimatedHeading from "@/components/animation/animated-heading";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";

const Studio = () => {
  return (
    <div className="my-16 md:my-32 flex flex-col">
      <AnimatedHeading
        title="My Studio"
        className="text-5xl lg:text-8xl text-center md:text-left font-title mb-4 md:mb-8"
      />
      <AnimatedDiv
        direction="up"
        className="my-4 w-full md:w-2/3 mx-auto relative"
      >
        <Image
          src="/images/studio/cover.jpg"
          alt="Picture of Lawal Yusuf's Studio and Workspace"
          width={1920}
          height={1080}
          className="md:rounded-[40px]"
        />
      </AnimatedDiv>
      <AnimatedDiv direction="up">
        <p className="font-heading font-bold text-sm md:text-2xl text-[#808080] text-center mb-8">
          Crafting Excellence in Architecture
        </p>
      </AnimatedDiv>
      <Container className="flex flex-col md:flex-row md:space-x-8 md:mt-8 items-center md:items-start">
        <AnimatedDiv direction="right" className="md:w-1/2">
          <h3 className="font-bold text-2xl md:text-3xl mb-2 md:mb-4">
            My Approach
          </h3>
          <p>
            Every project I undertake is driven by a commitment to design
            excellence, functionality, and innovation. Whether it’s
            architectural design, project management, or construction
            supervision, I approach each phase with precision and a deep
            understanding of space, materials, and user experience.
          </p>
          <p>
            I believe great architecture is a balance of creativity,
            practicality, and sustainability. From concept development to
            execution, I focus on understanding client needs, optimizing
            resources, and ensuring seamless project delivery. Every design is
            carefully crafted to reflect the client’s vision while adhering to
            the highest standards of aesthetics and structural integrity.
          </p>
        </AnimatedDiv>
        <AnimatedDiv direction="left" className="md:w-1/2 mt-4 md:mt-0">
          <h3 className="font-bold text-2xl md:text-3xl mb-2 md:mb-4">
            What I Offer
          </h3>
          <ul>
            <li>
              <span className="font-bold">Architectural Design:</span> Creating
              innovative, functional, and visually compelling spaces.
            </li>
            <li>
              <span className="font-bold">
                Project & Construction Management:
              </span>{" "}
              Overseeing projects from inception to completion, ensuring
              efficiency and quality.
            </li>
            <li>
              <span className="font-bold">
                Residential & Commercial Architecture:
              </span>{" "}
              Designing modern homes, office spaces, and commercial structures
              tailored to unique client needs.
            </li>
            <li>
              <span className="font-bold">Sustainable & Smart Design:</span>{" "}
              Integrating eco-friendly solutions and modern technology for
              future-ready spaces.
            </li>
            <li>
              <span className="font-bold">
                Interior Design & Space Planning:
              </span>{" "}
              Crafting interiors that enhance usability, comfort, and
              aesthetics.
            </li>
          </ul>
        </AnimatedDiv>
      </Container>
      <AnimatedDiv direction="up" className="mt-4 md:w-2/3 mx-auto">
        <p>
          With a strong foundation in design thinking and technical expertise, I
          bring visionary concepts to life with precision and purpose. Whether
          designing a single residence or managing a large-scale development, my
          goal is to deliver outstanding results that exceed expectations.
        </p>
      </AnimatedDiv>
    </div>
  );
};

export default Studio;
