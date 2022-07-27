import { WavyText, Button } from "../";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="mb-20">
        <WavyText
          content="Hi, my name is"
          className="text-3xl md:text-4xl font-normal text-primary-green"
        />

        <WavyText
          content="Tomas Hernandez,"
          className="text-4xl md:text-6xl font-bold"
        />
        <WavyText
          content="Software Engineer"
          className="text-3xl md:text-5xl text-blue-font font-bold"
        />
      </div>
      <Link activeClass="active" smooth spy to="contact">
        <Button />
      </Link>
    </div>
  );
};

export default Hero;
