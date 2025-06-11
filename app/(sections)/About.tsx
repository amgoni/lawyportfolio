import AnimatedDiv from "@/components/animation/animated-div";
import AnimatedHeading from "@/components/animation/animated-heading";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="mt-16 md:mt-32">
      <AnimatedHeading
        title="About Me"
        className="text-5xl lg:text-8xl text-center md:text-left font-title"
      />
      <Container className="flex flex-col-reverse md:flex-row md:space-x-8 mt-8 items-center md:items-start">
        <AnimatedDiv direction="right" className="md:w-7/12">
          <p>
            Hi, I&apos;m <strong>Lawal Yusuf</strong>, a passionate architect
            dedicated to designing spaces that are both functional and
            inspiring. My journey in architecture began in Istanbul, Turkey,
            where I earned both my bachelor&apos;s and master&apos;s degrees.
            <br />
            The city&apos;s rich architectural heritage and vibrant contemporary
            design scene deeply shaped my philosophy—encouraging me to think
            beyond the conventional and embrace bold, modern design solutions.
            <br />
            Now based in Abuja, Nigeria, I channel that experience into creating
            innovative, sustainable, and impactful architecture. From interior
            design to full-scale residential and commercial projects, I strive
            to balance aesthetics, efficiency, and functionality, tailoring each
            space to the unique needs of my clients.
            <br />
            Beyond the drafting table, I&apos;m a firm believer in creativity,
            balance, and the value of family time. When I&apos;m not designing
            or managing projects, I&apos;m enjoying time with loved ones,
            watching football, or battling it out in FIFA Ultimate Team.
            <br />
            Let&apos;s collaborate and bring your vision to life—through
            architecture that inspires and endures.
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
                <li>Lumion</li>
                <li>3ds Max</li>
              </ul>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv direction="left" className="hidden md:flex md:w-5/12">
          <Image
            src="/images/about.jpg"
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
