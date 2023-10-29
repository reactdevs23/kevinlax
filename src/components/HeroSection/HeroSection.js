import React, { useEffect, useRef, useState } from "react";
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
  const imageRef = useRef(null); // Separate reference for the image
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      if (videoLoaded) {
        const offset = window.pageYOffset;
        video.style.transform = `translate3d(0, ${offset * 0.5}px, 0)`;
      }
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    window.addEventListener("scroll", handleScroll);

    if (video) {
      video.addEventListener("loadeddata", handleLoadedData);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (video) {
        video.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, [videoLoaded]);

  return (
    <div className={styles.wrapper} id="hero">
      {!videoLoaded && (
        <img ref={imageRef} src={heroImg} alt="#" className={styles.video} />
      )}
      <video
        style={{ height: !videoLoaded && "0" }}
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={[styles.video, "parallax-video"].join(" ")}
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img ref={imageRef} src={heroImg} alt="#" className={styles.image} />
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
