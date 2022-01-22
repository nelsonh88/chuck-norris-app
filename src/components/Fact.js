import React from "react";
import styles from "./Fact.module.css";

// import styles from "./Fact.module.css";

const Fact = (props) => {
  return (
    <div className={styles["fact-wrapper"]}>
      <h2>{props.fact}</h2>
    </div>
  );
};

export default Fact;
