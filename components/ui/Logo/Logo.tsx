import { FC } from "react";
import { Link } from "react-scroll";
import styles from "./Logo.module.css";
import { LogoWrapper, SignalLeft, SignalRight } from "./Logo.styled";

const Logo: FC = () => {
  return (
    <Link activeClass="none" smooth spy to="home">
      <LogoWrapper className={styles.animate}>
        <SignalLeft id="signal-left">{"<"}</SignalLeft>
        <div>Tomas.hg</div>
        <SignalRight id="signal-right">{"/>"}</SignalRight>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
