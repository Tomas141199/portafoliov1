import useMightyMouse from "react-hook-mighty-mouse";

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
    <div className="eyes">
      <div id="left-eye" className="eye" style={styleEye}>
        <div className="pupil" />
      </div>
    </div>
  );
};

export default Eye;
