import React, { useRef } from "react";
import "./index.css";
import Navbar from "./navbar";
import About from "./about";
import Services from "./swiper";
import Main from "./main";
import Carousel from "./brands";
import Questions from "./questions";
import Contact from "./contact";

function App() {
  // Создаем рефы для секций
  const mainRef = useRef(null);
  const brandsRef = useRef(null);
  const servicesRef = useRef(null);
  const questionsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar
        scrollToRef={scrollToRef}
        refs={{
          mainRef,
          brandsRef,
          servicesRef,
          questionsRef,
          aboutRef,
          contactRef,
        }}
      />

      <div ref={mainRef}>
        <Main
          scrollToRef={scrollToRef}
          refs={{
            mainRef,
            brandsRef,
            servicesRef,
            questionsRef,
            aboutRef,
            contactRef,
          }}
        />
      </div>
      <div ref={brandsRef}>
        <Carousel />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={questionsRef}>
        <Questions />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
