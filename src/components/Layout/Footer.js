import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <p>Dedicated to my abuelo and his favorite action hero.</p>
        <p>
          Developed by Nelson Huezo |{" "}
          <a href="https://nelsonhuezo.com/">Portfolio</a> | 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
