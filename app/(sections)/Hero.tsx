import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import AnimatedHeading from "@/components/animation/animated-heading";
import AnimatedDiv from "@/components/animation/animated-div";
import Container from "@/components/container";
import Link from "next/link";

const Hero = () => {
  return (
    <Container className="flex flex-col-reverse md:flex-row my-8 items-center">
      <AnimatedDiv
        direction="right"
        className="md:w-1/2 flex items-start justify-center"
      >
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={499}
          height={580}
          className="rounded-[40px] filter grayscale"
        />
      </AnimatedDiv>
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center ml-0 md:ml-4 lg:ml-0 mb-4 md:mb-0">
        <AnimatedHeading
          title="Lawal Yusuf"
          className="font-title text-4xl md:text-6xl text-[#808080] text-center md:text-left mb-4"
        />
        <AnimatedHeading
          title="Architect with over 10 years of experience."
          className="font-heading text-4xl lg:text-8xl font-bold text-center md:text-left"
        />
        <AnimatedDiv>
          <Button size={"lg"} className="mt-4 lg:mt-8" asChild>
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </AnimatedDiv>
      </div>
    </Container>
  );
};

export default Hero;
