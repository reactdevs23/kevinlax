import React, { useState } from "react";
import styles from "./Music.module.css";
import {
  image1,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../../images";
import Popup from "../Popup/Popup";

const Music = () => {
  const data = [
    {
      img: image1,
      category: "Gaming",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image2,
      category: "Gaming",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image3,
      category: "Film",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image4,
      category: "film",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image5,
      category: "tv",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image6,
      category: "Film",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image7,
      category: "TV",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image8,
      category: "Film",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image9,
      category: "Gaming",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image10,
      category: "TV",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image11,
      category: "tv",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image12,
      category: "Film",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image13,
      category: "Gaming",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image14,
      category: "TV",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image15,
      category: "Gaming",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      img: image16,
      category: "TV",
      to: "#",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1695244833&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
  ];
  const tabs = ["all", "film", "tv", "Gaming"];
  const [currentTab, setCurrentTab] = useState("All");
  const [active, setActive] = useState(null);
  const [modal, setModal] = useState(false);

  const [itemClasses, setItemClasses] = useState(
    Array(data.length).fill("fadeIn")
  );

  const handleItemClick = (index) => {
    setModal(true);
    setActive(index);
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    const newClasses = Array(data.length).fill("fadeOut");
    setItemClasses(newClasses);
    setTimeout(() => {
      setItemClasses(Array(data.length).fill("fadeIn"));
    }, 300);
  };

  const filteredData = data.filter((item) =>
    currentTab.toLowerCase() === "all"
      ? true
      : item.category.toLowerCase() === currentTab.toLowerCase()
  );

  return (
    <>
      <div className={[styles.wrapper, "mainWrapper"].join(" ")} id="music">
        <h2 className={styles.title}>Music</h2>
        <div className={styles.tabs}>
          {tabs.map((tab, id) => (
            <p
              className={[
                styles.tab,
                tab.toLowerCase() === currentTab.toLowerCase() && styles.active,
              ].join(" ")}
              key={id}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
        <div className={styles.items}>
          {filteredData.map((el, i) => (
            <div
              className={[styles.imageWrapper, styles[itemClasses[i]]].join(
                " "
              )}
              key={i}
              onClick={() => handleItemClick(i)}
            >
              <img src={el.img} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
      {modal && <Popup {...data[active]} setModal={setModal} />}
    </>
  );
};

export default Music;
