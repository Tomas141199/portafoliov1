import { FC } from "react";
import { SectionHeading, Paragraph } from "../../styled-components";

const About: FC = () => {
  return (
    <div id="about" className="w-10/12 mx-auto h-screen flex flex-col gap-6">
      <SectionHeading>about me</SectionHeading>
      <Paragraph>
        Ipsum Lorem occaecat ut nulla dolore cupidatat do irure in incididunt
        aliqua. Mollit proident ex laborum labore officia aliquip aute aute.
        Incididunt magna irure eu ullamco nostrud proident quis ut proident.
        Adipisicing est Lorem magna eu officia nostrud minim eiusmod
        exercitation cillum est proident pariatur aute. Et commodo qui laborum
        labore magna dolore. Aliquip veniam est in tempor esse consequat fugiat.
      </Paragraph>
      <Paragraph>
        Ipsum Lorem occaecat ut nulla dolore cupidatat do irure in incididunt
        aliqua. Mollit proident ex laborum labore officia aliquip aute aute.
        Incididunt magna irure eu ullamco nostrud proident quis ut proident.
        Adipisicing est Lorem magna eu officia nostrud minim eiusmod
        exercitation cillum est proident pariatur aute. Et commodo qui laborum
        labore magna dolore. Aliquip veniam est in tempor esse consequat fugiat.
      </Paragraph>
    </div>
  );
};

export default About;
