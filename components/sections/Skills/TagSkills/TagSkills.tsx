import React from "react";
import {
  Cloud,
  renderSimpleIcon,
  renderImg,
  ICloud,
  renderText,
} from "react-icon-cloud";
import allIcons from "simple-icons";

const TagSkills = () => {
  const background = "#000";

  const rootStyle: React.CSSProperties = {};

  const containerProps: ICloud["containerProps"] = {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  };

  const canvasProps: ICloud["canvasProps"] = {};

  const IconATags = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ].map((s) =>
    renderSimpleIcon({
      icon: allIcons.get(s),
      minContrastRatio: 2,
      bgHex: background,
      size: 42,
      fallbackHex: "#fff",
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    })
  );

  // https://www.goat1000.com/tagcanvas-options.php
  const options: ICloud["options"] = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native", // null | 'div'
    tooltipDelay: 0,
    wheelZoom: false,
  };

  return (
    <div style={rootStyle}>
      <Cloud
        id={330022}
        containerProps={containerProps}
        canvasProps={canvasProps}
        options={options}
      >
        <a
          key={2}
          href="https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"
          title="Visual Studio Code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height="42"
            width="42"
            alt="Visual Studio Code"
            src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(0, 122, 204);" viewBox="0 0 24 24" height="42px" width="42px"> <title>Visual Studio Code</title> <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path> </svg>'
          />
        </a>
        {IconATags}
      </Cloud>
    </div>
  );
};

export default TagSkills;
