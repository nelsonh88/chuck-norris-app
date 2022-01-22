import React from "react";

import chuckNorrisIcon from "../../images/chuck-norris-icon-100x100.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header-wrapper_flex-container"]}>
          <img src={chuckNorrisIcon} alt="Chuck Norris Icon" />
          <h1>Chuck Norris Facts</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
