import Hero from "@/app/(sections)/Hero";
import About from "./(sections)/About";
import Projects from "./(sections)/Projects";
import Studio from "./(sections)/Studio";
import Contact from "./(sections)/Contact";
import Testimonials from "./(sections)/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Studio />
      <Testimonials />
      <Contact />
    </>
  );
}
