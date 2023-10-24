import React from "react";
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

  return (
    <div className={styles.wrapper} id="hero">
      {" "}
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
