import React, { FC } from "react";
import {
  ProjectDescription,
  LinkImage,
  ProjectContainer,
  ProjectName,
  ProjectImage,
} from "./Project.styled";

interface Props {
  position?: boolean;
}

const Project: FC<Props> = ({ position = false }) => {
  return (
    <ProjectContainer $position={position}>
      <h4 className="text-xs text-accent">Featured Project</h4>
      <ProjectName>
        <LinkImage href="#">project title</LinkImage>
      </ProjectName>
      <ProjectDescription $position={position}>
        Voluptate voluptate incididunt ad officia ad ullamco ipsum. Laborum
        excepteur officia occaecat eiusmod Lorem voluptate eiusmod sunt non qui
        proident amet tempor. Nulla ea nulla eiusmod veniam nisi voluptate ea
        sunt fugiat aliquip consequat proident consectetur tempor.
      </ProjectDescription>
      <span className="text-xs flex justify-start">
        tech1 tech2 tech3 tech4
      </span>
      <div>
        <a href="link">a</a>
      </div>
      <ProjectImage href="#" $urlImage={"project1.png"} $position={position} />
    </ProjectContainer>
  );
};

export default Project;
