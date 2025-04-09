import AnimatedHeading from "@/components/animation/animated-heading";
import Image from "next/image";
import React from "react";
import { ProjectsList } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import AnimatedDiv from "@/components/animation/animated-div";
import Container from "@/components/container";
import Link from "next/link";
import BackArrow from "@/components/BackArrow";

const page = () => {
  return (
    <div className="my-16 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <BackArrow />
        <AnimatedHeading
          title="My Projects"
          className="text-3xl lg:text-8xl text-right font-title"
        />
      </div>
      <AnimatedDiv
        direction="up"
        className="text-center md:text-left md:w-3/4 self-center mb-12"
        delay={0.5}
      >
        <p className="text-[#808080] text-lg md:text-2xl font-heading">
          I have designed and delivered exceptional spaces that meet and exceed
          client expectations. From modern residences to commercial landmarks,
          my work is a testament to precision, innovation, and attention to
          detail. <br />
        </p>
      </AnimatedDiv>
      {ProjectsList.map((project) => (
        <Container
          key={project.id}
          className="flex flex-col md:flex-row md:space-x-8 mb-24 items-center md:items-start"
        >
          <AnimatedDiv
            direction="right"
            className="w-full md:w-9/12 h-[200px] md:h-[500px] relative mb-4 md:mb-0"
          >
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              layout="fill"
              objectFit="cover"
            />
          </AnimatedDiv>
          <AnimatedDiv
            direction="left"
            className="flex flex-col w-full md:w-3/12 h-[350px] md:h-[500px]"
          >
            <div className="space-y-2 md:space-y-4 flex-grow ">
              <div>
                <h2 className="text-lg md:text-3xl font-bold font-heading">
                  {project.title}
                </h2>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Location</h3>
                <p className="text-md md:text-xl font-semibold">
                  {project.location}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Period</h3>
                <p className="text-md md:text-xl font-semibold">
                  {project.period}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Status</h3>
                <p className="text-md md:text-xl font-semibold">
                  {project.status}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Client</h3>
                <p className="text-md md:text-xl font-semibold">
                  {project.client}
                </p>
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-heading">Service</h3>
                <p className="text-md md:text-xl font-semibold">
                  {project.service}
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <Button size="default" asChild>
                <Link href={`/projects/${project.id}`}>View Project</Link>
              </Button>
            </div>
          </AnimatedDiv>
        </Container>
      ))}
      <AnimatedDiv
        direction="up"
        className="text-center md:text-left md:w-3/4 self-center mb-12"
        delay={0.5}
      >
        <p className="text-[#808080] text-lg md:text-2xl font-heading">
          Every project is crafted to align with clients&apos; unique
          requirements and specifications, ensuring functionality, aesthetics,
          and sustainability are seamlessly integrated.
        </p>
      </AnimatedDiv>
    </div>
  );
};

export default page;
