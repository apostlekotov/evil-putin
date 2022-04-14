import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/Layout";
import { Marquee } from "@/components/Marquee";

import { Hero } from "@/sections/Hero";
import { Metahero } from "@/sections/Metahero";
import { AboutWar } from "@/sections/AboutWar";
import { AboutUs } from "@/sections/AboutUs";
import { Character } from "@/sections/Character";
import { Metaverse } from "@/sections/Metaverse";
import { Roadmap } from "@/sections/Roadmap";
import { FAQ } from "@/sections/FAQ";
import { Banner } from "@/sections/Banner";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Evil Putin™</title>
    </Head>

    <Hero />
    <Metahero />
    <Marquee>Support Ukraine</Marquee>
    <AboutWar />
    <AboutUs />
    <Character />
    {/* <Marquee>Stop Russian Aggression</Marquee> */}
    <Metaverse />
    <Roadmap />
    <FAQ />
    <Banner />
  </Layout>
);

export default Home;
