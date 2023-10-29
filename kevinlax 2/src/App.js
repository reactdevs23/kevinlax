import React, { useRef, useEffect } from "react";
import { Parallax } from "react-parallax";
import HeroSection from "./components/HeroSection/HeroSection";
import Music from "./components/Music/Music";
import styles from "./App.module.css";
import { bg1, bg2, bg3 } from "./images";
import Biography from "./components/Biography/Biography";
import Press from "./components/Press/Press";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      const offset = window.pageYOffset;
      video.style.transform = `translate3d(0, ${offset * 0.5}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Music />

      <Parallax
        bgImage={bg1}
        strength={500}
        className={styles.image}
      ></Parallax>

      <Biography />

      <Parallax
        bgImage={bg2}
        strength={500}
        className={styles.image}
      ></Parallax>

      <Press />

      <Parallax
        bgImage={bg3}
        strength={500}
        className={styles.image}
      ></Parallax>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
