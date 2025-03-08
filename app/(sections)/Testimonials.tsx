import AnimatedDiv from "@/components/animation/animated-div";
import AnimatedHeading from "@/components/animation/animated-heading";
import { InfiniteMovingCards } from "@/components/animation/infinite-moving-cards";
import Container from "@/components/container";
import React from "react";

const testimonials = [
  {
    quote:
      "When Unlimited Brain Works got its Series B funding and we were about to move to a new office, we reached out to Lawal Yusuf for interior design. He did an amazing job and we couldn't be happier with the results.",
    name: "Amin Goni",
    title: "CEO, Unlimited Brain Works",
  },
  {
    quote:
      "I have worked with Lawal Yusuf on multiple projects and he has always delivered on time and within budget. There is no other architect I trust to deliver quality work.",
    name: "Nasiru Sabo",
    title: "Founder/CEO, MS Zaheera Properties",
  },
  {
    quote:
      "Lawal Yusuf is a true professional. He is very creative and has a keen eye for detail. I would recommend him to anyone looking for a top-notch architect.",
    name: "Ibrahim Ahmad",
    title: "CEO, Ahmad & Co.",
  },
  {
    quote:
      "I have worked with Lawal Yusuf on multiple projects and he has always delivered on time and within budget. There is no other architect I trust to deliver quality work.",
    name: "Diego Maradona",
    title: "CEO, Maradona & Co.",
  },
  {
    quote:
      "I have worked with Lawal Yusuf on multiple projects and he has always delivered on time and within budget. There is no other architect I trust to deliver quality work.",
    name: "Moussa Sissoko",
    title: "Managing Director, Brick and Mortar Realty",
  },
];

const Testimonials = () => {
  return (
    <div className="my-16 md:my-32">
      <AnimatedHeading
        title="Testimonials"
        className="hidden md:block text-5xl lg:text-8xl text-center md:text-left font-title mb-4 md:mb-8"
      />
      <AnimatedDiv direction="right">
        <p className="font-heading font-bold text-sm md:text-2xl text-[#808080] text-center mb-2">
          Kind Words from Satisfied Clients
        </p>
      </AnimatedDiv>
      <Container className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </Container>
    </div>
  );
};

export default Testimonials;
