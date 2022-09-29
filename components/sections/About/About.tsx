import { FC } from "react";
import { SectionHeading, Paragraph, Accent } from "../../styled-components";

const About: FC = () => {
  return (
    <div id="about" className="mt-40 w-80 md:w-96 mx-auto">
      <SectionHeading>about me</SectionHeading>
      <Paragraph>
        I am an IT student passionate about new technologies. As a Full-Stack
        developer, I have worked on several projects that allowed me to combine
        various technologies like{" "}
        <Accent>
          Java, Javascript, Nodejs, SASS, HTML, Reactjs, Vuejs, and PHP.
        </Accent>
      </Paragraph>
      <Paragraph>
        I love <Accent>web and software development</Accent> and always aim to
        <Accent> learn </Accent> new tools to work with, both established and
        new.
      </Paragraph>
    </div>
  );
};

export default About;
