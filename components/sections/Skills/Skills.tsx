import { FC } from "react";
import { SectionHeading, Accent } from "../../styled-components";
import { TagSkills } from "./TagSkills";

const Skills: FC = () => {
  return (
    <div id="myskills" className="pt-24 mt-32 w-80 md:w-96 mx-auto h-screen">
      <SectionHeading>my skills</SectionHeading>
      <h3 className="mt-12 mb-1 text-primary-green">Proficient with:</h3>
      <div className="text-sm">
        Node.js <Accent>|</Accent> Javascript <Accent>|</Accent> Reactjs{" "}
        <Accent>|</Accent> MERN <Accent>|</Accent> Nextjs <Accent>|</Accent>{" "}
        CSS3 <Accent>|</Accent> Python <Accent>|</Accent> C++ <Accent>|</Accent>{" "}
        PHP
        <Accent>|</Accent> Git <Accent>|</Accent> Java <Accent>|</Accent> SASS{" "}
        <Accent>|</Accent> Mysql <Accent>|</Accent> Laravel
      </div>

      <h3 className="mt-12 mb-1 text-primary-green">Familiar with:</h3>
      <div className="text-sm mb-4">
        Vuejs <Accent>|</Accent> LAMP Docker <Accent>|</Accent> Typescript{" "}
        <Accent>|</Accent> PostgreSQL <Accent>|</Accent> SQL <Accent>|</Accent>
        Flutter <Accent>|</Accent> Go <Accent>|</Accent> JAM <Accent>|</Accent>{" "}
        Redux <Accent>|</Accent> Android <Accent>|</Accent> NoSQL{" "}
        <Accent>|</Accent> Python
      </div>

      <TagSkills />
    </div>
  );
};

export default Skills;
