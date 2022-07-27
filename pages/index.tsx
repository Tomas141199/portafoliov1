import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { About } from "../components/sections";

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <section id="myskills">PROJECTS</section>
      <section id="experience">BLOG</section>
      <section id="work">Work</section>
      <section id="contact">CONTACT ME</section>
    </Layout>
  );
};

export default Home;
