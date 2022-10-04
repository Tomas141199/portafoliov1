import React, { FC } from "react";
import { ExternalLink } from "../../../icons";
import {
  ProjectDescription,
  LinkImage,
  ProjectContainer,
  ProjectName,
  ProjectImage,
} from "./Project.styled";

interface Props {
  position?: boolean;
  title: String;
  description: String;
  techStack: String;
  url: String;
  urlImg: String;
}

const Project: FC<Props> = ({
  position = false,
  title,
  description,
  techStack,
  url,
  urlImg,
}) => {
  return (
    <ProjectContainer $position={position}>
      <h4 className="text-xs text-accent">Featured Project</h4>
      <ProjectName>
        <LinkImage href={url} target="_blank" rel="noreferrer">
          {title}
        </LinkImage>
      </ProjectName>
      <ProjectDescription $position={position}>
        {description}
      </ProjectDescription>
      <span className="text-2xs flex justify-start">{techStack}</span>
      <a
        href={url.toString()}
        target="_blank"
        rel="noreferrer"
        className="transition duration-200 scale-100 hover:scale-95"
      >
        <ExternalLink />
      </a>
      <ProjectImage
        href={url}
        target="_blank"
        rel="noreferrer"
        $position={position}
        style={{
          backgroundImage: `url(${urlImg})`,
        }}
      />
    </ProjectContainer>
  );
};

export default Project;
