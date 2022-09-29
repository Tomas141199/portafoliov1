import type { NextPage } from "next";
import { Layout } from "../components/layout";
import {
  About,
  Experience,
  HeroContainer,
  Skills,
  Work,
} from "../components/sections";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroContainer />
      <About />
      <Experience />
      <Skills />
      <Work />
      <section id="contact">CONTACT ME</section>
    </Layout>
  );
};

export default Home;
