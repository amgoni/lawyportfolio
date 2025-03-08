import AnimatedDiv from "@/components/animation/animated-div";
import AnimatedHeading from "@/components/animation/animated-heading";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-16 md:mt-32">
      <AnimatedHeading
        title="About Me"
        className="text-5xl lg:text-8xl text-center md:text-left font-title"
      />
      <Container className="flex flex-col-reverse md:flex-row md:space-x-8 mt-8 items-center md:items-start">
        <AnimatedDiv direction="right" className="md:w-7/12">
          <p>
            Hi, I’m <strong>Lawal Yusuf</strong>, a passionate architect
            dedicated to designing spaces that are both functional and
            inspiring.
            <br />
            I specialize in crafting modern, sustainable, and innovative
            architecture that harmonizes with its surroundings while meeting the
            unique needs of my clients.
            <br />
            Architecture is more than just structures—it’s about creating
            experiences. I focus on blending aesthetics, efficiency, and
            sustainability to bring visionary ideas to life. Whether it’s a
            residential home, commercial space, or urban design, I strive to
            ensure that every project is a seamless balance of form and
            function.
            <br />
            I’m committed to pushing the boundaries of design, technology, and
            sustainability, ensuring that my architectural solutions stand the
            test of time. Let’s collaborate and shape the future—one space at a
            time.
          </p>
          <div className="flex flex-col md:flex-row mt-4 md:space-x-10 space-y-4 md:space-y-0">
            <div className="">
              <h2 className="text-xl font-bold mb-1">My skills:</h2>
              <ul>
                <li>Architectural Design</li>
                <li>Interior Design</li>
                <li>3D Modeling</li>
                <li>Construction Management</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-bold mb-1">My tools:</h2>
              <ul>
                <li>AutoCAD</li>
                <li>SketchUp</li>
                <li>Revit</li>
                <li>Rhino</li>
                <li>InDesign</li>
              </ul>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv direction="left" className="hidden md:flex md:w-5/12">
          <Image
            src="/images/about.webp"
            alt="Lawal Yusuf"
            width={600}
            height={900}
            className="h-2/3 object-cover rounded-[40px]"
          />
        </AnimatedDiv>
      </Container>
    </div>
  );
};

export default About;
