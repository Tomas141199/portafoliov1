import React, { FC } from "react";

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
    <div>
      Coming soon...
    </div>
  );
};

export default Project;
