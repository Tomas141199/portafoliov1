import React from "react";
import { SectionHeading } from "../../styled-components";
import { VerticalTab } from "./VerticalTab";

const Experience = () => {
  return (
    <section id="experience" className="pt-24 mx-auto">
      <SectionHeading className="text-left md:text-center">
        Experience
      </SectionHeading>
      <VerticalTab />
    </section>
  );
};

export default Experience;
