import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { logo } from "../../images";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { navItem: "HOME", to: "hero" },
    { navItem: "MUSIC", to: "music" },
    { navItem: "BIO", to: "bio" },
    { navItem: "PRESS", to: "press" },
    { navItem: "CONTACT", to: "contact" },
  ];
  const [sidebar, setSidebar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={[styles.wrapper, isScrolled && styles.wrapperBg].join(" ")}>
      <header className={[styles.header].join(" ")}>
        <Link
          className={styles.navItem}
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={logo} alt="#" className={styles.logo} />
        </Link>
        {sidebar ? (
          <IoMdClose
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <AiOutlineAlignRight
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
        <div className={[styles.navItems, sidebar && styles.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <Link
              key={i}
              className={styles.navItem}
              to={el.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeStyle={{ color: "#F8965A" }}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
