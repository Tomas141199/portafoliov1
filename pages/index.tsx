import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { About, HeroContainer } from "../components/sections";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroContainer />
      <About />
      <section id="myskills">PROJECTS</section>
      <section id="experience">BLOG</section>
      <section id="work">Work</section>
      <section id="contact">CONTACT ME</section>
    </Layout>
  );
};

export default Home;
