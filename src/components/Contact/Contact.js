import React, { useState } from "react";
import { imdb, instagram, soundCloud, spotify } from "../../images";
import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
    <div className={[styles.wrapper, "mainWrapper"].join(" ")} id="contact">
      <h2 className={styles.title}>CONTACT</h2>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <h4 className={styles.heading}>Get In Touch</h4>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textArea}
          ></textarea>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
        <div className={styles.textContainer}>
          {" "}
          <p className={styles.heading}>Film Representation</p>
          <div className={styles.infoWrapper}>
            <div>
              <p className={[styles.info, styles.highlight].join(" ")}>
                First Artists Management
              </p>
              <p className={styles.info}> Alexander Vangelos (Agent)</p>
              <a
                href="www.firstartistsmgmt.com"
                target="_blank"
                rel="noreferrer"
                className={styles.info}
              >
                www.firstartistsmgmt.com{" "}
              </a>
              <a
                className={styles.info}
                href="AVangelos@firstartistsmgmt.com"
                target="_blank"
                rel="noreferrer"
              >
                AVangelos@firstartistsmgmt.com
              </a>
            </div>
            <div>
              <p className={styles.info}>Phone: +1.818.377.7750</p>
              <p className={styles.info}>Address: 4764 Park Granada Ste 110</p>
              <p className={styles.info}>Calabasas, CA 91302, USA</p>
            </div>
            <div className={styles.socialContainer}>
              {socials.map((el, i) => (
                <div key={i}>
                  <p className={styles.label}>{el.label}</p>
                  <div className={styles.socials}>
                    {el.social.map((item, id) => (
                      <a
                        href={item.to}
                        target="_blank"
                        key={id}
                        rel="noreferrer"
                      >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
