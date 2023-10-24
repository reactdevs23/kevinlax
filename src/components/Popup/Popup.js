import React from "react";
import { MdOutlineClose } from "react-icons/md";
import styles from "./Popup.module.css";

const Popup = ({ setModal, url }) => {
  const closePopup = () => {
    setModal(false);
  };

  return (
    <>
      <div className={`${styles.wrapper} overflow`}>
        <div className={styles.closeContainer} onClick={closePopup}>
          <MdOutlineClose className={styles.close} />
        </div>
        <iframe
          title="soundCloud"
          className={styles.iframe}
          allow="autoplay"
          src={url}
        ></iframe>
      </div>
      <div className={styles.overlay} onClick={closePopup}></div>
    </>
  );
};

export default Popup;
