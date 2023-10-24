import React from "react";
import styles from "./Press.module.css";

const Press = () => {
  return (
    <div className={styles.wrapper} id="press">
      <h2 className={styles.title}>PRESS</h2>
      <div className={styles.infoWrapper}>
        <p className={styles.info}>Out Take: Kevin Lax</p>
        <p className={styles.info}>Kevin Lax on the Politics of Fear</p>
        <p className={styles.info}>
          Composer Kevin Lax on Scoring the First Purge
        </p>
        <p className={styles.info}>
          The First Purge: Interview with composer Kevin Lax
        </p>
      </div>
    </div>
  );
};

export default Press;
