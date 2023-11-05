import React from "react";
import { Footer, Main, NavTech, Slider } from "../components";
import styled from "styled-components";

const GradientWrapper = styled.div`
  background: linear-gradient(to top, #6e00f8, #563ce9, #116eee);
  padding-bottom: 1rem;
`;

const Home = () => {
  return (
    <>
      <NavTech />
      <Main />

      <Slider />
      <Footer />
    </>
  );
};

export default Home;
