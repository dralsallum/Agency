import React from "react";
import { Article, Divider, Footer, Main, NavTech, Slider } from "../components";
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
      <Article />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
