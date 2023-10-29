import React from "react";
import styles from "./Biography.module.css";
import {
  appleTv,
  biograpy,
  dreamWorks,
  ea,
  netflix,
  universal,
} from "../../images";
const Biography = () => {
  const partner = [netflix, ea, universal, dreamWorks, appleTv];
  return (
    <div className={styles.wrapper} id="bio">
      <h2 className={styles.title}>BIOGRAPHY</h2>
      <img src={biograpy} alt="#" className={styles.image} />
      <p className={styles.info}>
        Originally from the Pacific Northwest, Kevin Lax came to Los Angeles to
        pursue film composition at USC. After a rigorous and successful bout of
        academic studies, where he garnered several awards for his concert works
        and film/video game scores, Kevin rapidly began emerging as a
        compelling, versatile, and skillful composer. Soon after graduation,
        Kevin found himself as an in-demand composer, and has since worked on a
        number of high profile projects, including Dreamworks Kung Fu Panda,
        Blumhouse's The Purge, and LucasArt's Star Wars video game franchise.
        Kevin currently resides in the lovely Manhattan Beach area and spends
        his time composing, arranging, and producing for an array of projects.
        In his freetime, Kevin enjoys teaching, performing, playing soccer, and
        the great outdoors. Thanks for visiting!
      </p>
      <div className={styles.partnerWrapper}>
        <p className={[styles.info, styles.partnerText].join(" ")}>
          Some of the clients Kevin has worked with in the past include:
        </p>
        <div className={styles.partners}>
          {partner.map((el, i) => (
            <img src={el} alt="#" className={styles.partnerImage} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biography;
