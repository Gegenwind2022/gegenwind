import React from "react";

import Hero from "./Hero";
import BackgroundVideo from "./BackgroundVideo";
import LabelledDiagram from "./LabelledDiagram";
import Reviews from "./Reviews";
import Discount from "./Discount";

const Home = (): JSX.Element => (
  <>
    <Hero />
    <BackgroundVideo />
    <LabelledDiagram />
    <Reviews />
    <Discount />
  </>
);

export default Home;
