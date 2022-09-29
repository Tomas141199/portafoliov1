import { FC } from "react";
import { SectionHeading, Paragraph } from "../../styled-components";
import { TagSkills } from "./TagSkills";

const Skills: FC = () => {
  return (
    <div id="myskills" className="mt-32 w-80 md:w-96 mx-auto h-screen">
      <SectionHeading>my skills</SectionHeading>
      <TagSkills />
    </div>
  );
};

export default Skills;
