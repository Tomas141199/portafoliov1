import type { NextPage } from "next";
import { Layout } from "../components/layout";
import {
  About,
  Contact,
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
      <Contact />
    </Layout>
  );
};

export default Home;
