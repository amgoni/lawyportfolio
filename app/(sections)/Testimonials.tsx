import AnimatedDiv from "@/components/animation/animated-div";
import AnimatedHeading from "@/components/animation/animated-heading";
import { InfiniteMovingCards } from "@/components/animation/infinite-moving-cards";
import Container from "@/components/container";
import React from "react";

const testimonials = [
  {
    quote:
      "Working with Lawal Yusuf on the Imamu Duplex was a seamless experience. His keen eye for detail and planning expertise brought my vision to life, creating a home that is both functional and elegant.",
    name: "Imamu Tukur Ahmed",
    title: "",
  },
  {
    quote:
      "Lawal Yusuf managed every stage of the NAF Residence project, from concept to completion. His commitment to quality ensured a beautiful and comfortable home for my family.",
    name: "Nafiu Ahmed",
    title: "",
  },
  {
    quote:
      "The transformation of Guards Polo Club exceeded my expectations. Lawal’s experience with handling complex projects helped to turn an aging facility into a modern, luxurious space. Highly recommended!",
    name: "Sen. Halliru Jika",
    title: "",
  },
  {
    quote:
      "From a bare apartment to a refined living space, Lawal’s interior fit-out for our Mabushi Apartments project was outstanding. Every detail was thoughtfully executed and he made key improvements to our initial plans.",
    name: "Uppertec Homes & Luxury",
    title: "",
  },
  {
    quote:
      "Lawal’s design and project management of my dream project delivered a home that perfectly balances comfort and sophistication. The process was smooth and the results were impressive.",
    name: "Justice Aminu H. Usman",
    title: "",
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
