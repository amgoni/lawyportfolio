import AnimatedHeading from "@/components/animation/animated-heading";
import Image from "next/image";
import React from "react";
import { ProjectsList } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import NumberTicker from "@/components/animation/NumberTicker";
import AnimatedDiv from "@/components/animation/animated-div";

const Projects = () => {
  return (
    <div className="my-16 md:my-32 flex flex-col">
      <AnimatedHeading
        title="My Projects"
        className="text-5xl lg:text-8xl text-center md:text-left font-title mb-8"
      />
      {ProjectsList.slice(0, 3).map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row md:space-x-8 md:pl-16 mb-8 items-center md:items-start"
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
                <h3 className="text-md md:text-xl font-heading font-semibold">
                  Location
                </h3>
                <p className="text-sm md:text-lg">{project.location}</p>
              </div>
              <div>
                <h3 className="text-md md:text-xl font-heading font-semibold">
                  Period
                </h3>
                <p className="text-sm md:text-lg">{project.period}</p>
              </div>
              <div>
                <h3 className="text-md md:text-xl font-heading font-semibold">
                  Status
                </h3>
                <p className="text-sm md:text-lg">{project.status}</p>
              </div>
              <div>
                <h3 className="text-md md:text-xl font-heading font-semibold">
                  Client
                </h3>
                <p className="text-sm md:text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="text-md md:text-xl font-heading font-semibold">
                  Service
                </h3>
                <p className="text-sm md:text-lg">{project.service}</p>
              </div>
            </div>
            <div className="mt-auto">
              <Button size="default">View Project</Button>
            </div>
          </AnimatedDiv>
        </div>
      ))}
      <div className="self-center flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mb-4">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl">Projects Completed</h3>
          <span className="text-6xl">
            <NumberTicker value={23} />+
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl">Clients Satisfied</h3>
          <span className="text-6xl">
            <NumberTicker value={18} />+
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl">Years of Experience</h3>
          <span className="text-6xl">
            <NumberTicker value={4} />+
          </span>
        </div>
      </div>
      <Button size="lg" className="self-center">
        View All Projects
      </Button>
    </div>
  );
};

export default Projects;
