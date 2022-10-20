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
import { SocialMedia } from "../components/social-media";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroContainer />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
      <SocialMedia />
    </Layout>
  );
};

export default Home;
