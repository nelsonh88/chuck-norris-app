import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <p className={styles.button} onClick={props.onClick}>
      {props.content}
    </p>
  );
};

export default Button;
