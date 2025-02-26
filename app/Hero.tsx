import Image from "next/image";
import React from "react";
import { Button } from "../components/ui/button";
import AnimatedHeading from "@/components/animation/animated-heading";
import AnimatedDiv from "@/components/animation/animated-div";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row my-8 items-center">
      <AnimatedDiv
        direction="right"
        className="md:w-1/2 flex items-start justify-center"
      >
        <Image src="/images/hero.jpg" alt="Hero" width={499} height={580} />
      </AnimatedDiv>
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center ml-0 md:ml-4 lg:ml-0 mb-4 md:mb-0">
        <AnimatedHeading
          title="Transforming Spaces with Vision and Precision"
          className="font-heading text-2xl lg:text-6xl font-bold text-center md:text-left"
        />
        <AnimatedDiv className="mt-2 lg:mt-4">
          <p className="text-sm lg:text-lg text-center md:text-left">
            Architecture is more than just buildings—it’s about creating
            experiences. I design spaces that seamlessly blend aesthetics,
            functionality, and sustainability.
            <br /> Every project is a reflection of innovation, tailored to
            inspire and endure. From modern residences to dynamic commercial
            spaces, I turn concepts into reality with meticulous attention to
            detail. Let’s craft something timeless together.
          </p>
        </AnimatedDiv>
        <AnimatedDiv>
          <Button size={"lg"} className="mt-4 lg:mt-12">
            Let's Talk
          </Button>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Hero;
