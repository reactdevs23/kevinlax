import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import {
  heroImg,
  imdb,
  instagram,
  kevinlaxLogo,
  kevinlaxMobileLogo,
  soundCloud,
  spotify,
} from "../../images";
import { Parallax } from "react-parallax";

const HeroSection = () => {
  const socials = [
    {
      label: "Listen",
      social: [
        { icon: soundCloud, to: "#" },
        { icon: spotify, to: "#" },
      ],
    },
    {
      label: "Follow",
      social: [
        { icon: imdb, to: "#" },
        { icon: instagram, to: "#" },
      ],
    },
  ];
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
    <div className={styles.wrapper} id="hero">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={[styles.video, "parallax-video"].join(" ")}
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>{" "}
      <img src={heroImg} alt="#" className={styles.image} />
      <div className={styles.detailsContainer}>
        <div className={styles.socialContainer}>
          {socials.map((el, i) => (
            <div key={i}>
              <p className={styles.label}>{el.label}</p>
              <div className={styles.socials}>
                {el.social.map((item, id) => (
                  <a href={item.to} target="_blank" key={id} rel="noreferrer">
                    <img
                      src={item.icon}
                      alt="#"
                      className={styles.socialIcon}
                    />
                  </a>
                ))}{" "}
              </div>
            </div>
          ))}
        </div>
        <img src={kevinlaxLogo} alt="#" className={styles.logo} />
        <img src={kevinlaxMobileLogo} alt="#" className={styles.mobileLogo} />
      </div>
    </div>
  );
};

export default HeroSection;
