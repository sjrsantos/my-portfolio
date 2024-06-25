// src/components/Home/Home.js
import React from "react";
import { HomeWrapper, Title, Subtitle } from "./Home.styles";

const Home = () => (
  <HomeWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Title
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      Welcome to My Portfolio
    </Title>
    <h1>Silvio dos Santos Junior</h1>
    <Subtitle
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      Full Stack Developer | React | Firebase
    </Subtitle>
  </HomeWrapper>
);

export default Home;
