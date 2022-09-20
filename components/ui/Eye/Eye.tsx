import useMightyMouse from "react-hook-mighty-mouse";
import styles from "./Eye.module.css";

const Eye = () => {
  const {
    positionRelative: { angle: angleLeftEye },
  } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });

  const styleEye = {
    transform: `rotate(-${angleLeftEye}deg)`,
    backgroundColor: "#f3efef",
    transition: `all 0s ease`,
  };

  return (
    <div className={styles.eyes}>
      <div id="left-eye" className={styles.eye} style={styleEye}>
        <div className={styles.pupil} />
      </div>
    </div>
  );
};

export default Eye;
