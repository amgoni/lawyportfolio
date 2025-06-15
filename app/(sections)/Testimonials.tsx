import AnimatedDiv from "@/components/animation/animated-div";
import AnimatedHeading from "@/components/animation/animated-heading";
import { InfiniteMovingCards } from "@/components/animation/infinite-moving-cards";
import Container from "@/components/container";
import React from "react";

const testimonials = [
  {
    quote:
      "I am very glad I hired Lawal Yusuf when I needed a professional to design and fit-out the interior of my new home. His attention to detail and creative input turned my house into a beautiful, livable space. He managed everything professionally and delivered beyond expectations. I'm proud to call it home.",
    name: "Imamu Tukur Ahmed",
    title: "",
  },
  {
    quote:
      "Lawal brought new life to my property. His design approach was thoughtful, and his solutions were practical yet elegant. The renovation exceeded my expectations in both function and form. I highly recommend his services to anyone looking to transform their space.",
    name: "Nafiu Ahmed",
    title: "",
  },
  {
    quote:
      "Lawal Yusuf is a true professional. He is very creative and has a keen eye for detail. He translated my needs into a beautifully executed set of homes. His work ethic and commitment to excellence are commendable.",
    name: "Nasiru Sabo",
    title: "Founder/CEO, MS Zaheerah Multi-Services",
  },
  {
    quote:
      "I have worked with Lawal Yusuf on multiple projects and he has always delivered on time and within budget. There is no other architect I trust to deliver quality work.",
    name: "Sen. Halliru Jika",
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
