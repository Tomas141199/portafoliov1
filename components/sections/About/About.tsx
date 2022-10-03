import { FC } from "react";
import { SectionHeading, Paragraph, Accent } from "../../styled-components";

const About: FC = () => {
  return (
    <section id="about" className="pt-24 mt-28 mx-auto">
      <SectionHeading>about me</SectionHeading>
      <Paragraph className="w-full md:w-3/4">
        I am an IT student passionate about new technologies. As a Full-Stack
        developer, I have worked on several projects that allowed me to combine
        various technologies like{" "}
        <Accent>
          Java, Javascript, Nodejs, SASS, HTML, Reactjs, Vuejs, and PHP.
        </Accent>
      </Paragraph>
      <Paragraph className="w-full md:w-3/4">
        I love <Accent>web and software development</Accent> and always aim to
        <Accent> learn </Accent> new tools to work with, both established and
        new.
      </Paragraph>
    </section>
  );
};

export default About;
