"use client";

import { useRef } from "react";
import AnimatedHeading from "@/components/animation/animated-heading";
import { Linkedin, Mail, Phone } from "lucide-react";
import AnimatedDiv from "@/components/animation/animated-div";
import Container from "@/components/container";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const Links = [
  {
    icon: <Mail size={30} strokeWidth={2.5} />,
    href: "mailto:lawalyusuf@example.com",
    text: "Send me an email",
  },
  {
    icon: <Phone size={30} strokeWidth={2.5} />,
    href: "tel:+2341234567890",
    text: "Call me",
  },
  {
    icon: <Linkedin size={30} strokeWidth={2.5} />,
    href: "https://www.linkedin.com",
    text: "Connect on LinkedIn",
    target: "_blank",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="my-16 md:my-32">
      <AnimatedHeading
        title="Contact Me"
        className="text-5xl lg:text-8xl text-center md:text-right font-title mb-8"
      />
      <AnimatedDiv direction="up">
        <p className="font-heading font-bold text-sm md:text-2xl text-[#808080] text-center mb-2">
          Let's Get in Touch
        </p>
      </AnimatedDiv>
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          {Links.map((link) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="bg-black text-white p-12 rounded-lg flex items-center md:justify-center space-x-4 font-bold md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              target={link.target || ""}
            >
              <span>{link.icon}</span>
              <span>{link.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
