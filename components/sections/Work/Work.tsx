import React from "react";
import { SectionHeading, Paragraph } from "../../styled-components";
import { Project } from "./Project";

const Work = () => {
  return (
    <div id="work" className="pt-24 mt-48 mx-auto">
      <SectionHeading>My work</SectionHeading>
      <div className="my-12">
        <Project
          description={
            "Ecommerce Store where you can find furniture and home decor items."
          }
          title={"Groove Furniture"}
          techStack={"ReactJS StyledComponents CSS API"}
          url={"https://groove-furniture.netlify.app/"}
          urlImg={
            "https://res.cloudinary.com/my-account-145/image/upload/v1664905273/project1_g7bru5.webp"
          }
        />
        <Project
          position={true}
          description={
            "Ecommerce Store where you can find guitars and blog post."
          }
          title={"GuitarLA"}
          techStack={"Nextjs StyledComponents CSS Strapi MongoDB"}
          url={"https://guitarla-next-sigma.vercel.app/"}
          urlImg={
            "https://res.cloudinary.com/my-account-145/image/upload/v1664905273/project2_tg2b02.webp"
          }
        />
        <Project
          description={
            "A web application to create and categorize news, working as a social network for information and discussion."
          }
          title={"The Daily Note"}
          techStack={"Nextjs Firebase CSS TailwindCSS"}
          url={"https://thedailynote.vercel.app/"}
          urlImg={
            "https://res.cloudinary.com/my-account-145/image/upload/v1664905274/project3-_1__ejvahy.webp"
          }
        />
      </div>
    </div>
  );
};

export default Work;
