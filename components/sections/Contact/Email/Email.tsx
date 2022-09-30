import React from "react";
import styles from "./Email.module.css";
const Email = () => {
  return (
    <div className="flex justify-center mt-12 text-blue-font">
      <a
        className={styles.effect1}
        href="mailto:tomashernandez141199@gmail.com"
      >
        Let&apos;s Go!
        <span className={styles.bg}></span>
      </a>
    </div>
  );
};

export default Email;
