import React from "react";
import { SectionHeading, Paragraph } from "../../styled-components";
import { Project } from "./Project";

const Work = () => {
  return (
    <div id="work" className="pt-24 mt-48 mx-auto">
      <SectionHeading>My work</SectionHeading>
      <div className="my-12">
        <Project />
        <Project position={true} />
      </div>
    </div>
  );
};

export default Work;
