// src/components/About/About.js
import React, { useState, useEffect } from "react";
import { AboutWrapper, CardWrapper } from "./About.styles";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  const [isCardVisible, setIsCardVisible] = useState({});

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const cardElements = document.querySelectorAll(".card");

    cardElements.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      // Verifica se pelo menos metade do card está visível
      if (cardTop < windowHeight * 0.8 && cardBottom > 0) {
        setIsCardVisible((prev) => ({ ...prev, [card.id]: true }));
      } else {
        setIsCardVisible((prev) => ({ ...prev, [card.id]: false }));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AboutWrapper>
      <Element name="about" />
      <h1>About Me</h1>
      <motion.img
        src="https://avatars.githubusercontent.com/u/80593793?v=4"
        alt="Silvio dos Santos Junior"
        style={{
          maxWidth: "100%",
          borderRadius: "50%",
          margin: "1rem auto",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <p>
        Hello! I’m Silvio dos Santos Junior, a passionate and dedicated
        professional with a strong background in software development and web
        technologies. With a proven track record in creating dynamic and
        responsive web applications, I specialize in using cutting-edge
        technologies such as React, Firebase, and GitHub Pages. I hold extensive
        experience in building and deploying social media applications,
        leveraging my skills to create seamless user experiences and efficient
        data management systems. My expertise in setting up automated deployment
        pipelines using GitHub Actions ensures that my projects are always
        up-to-date and running smoothly.
      </p>
      <h2 id="professional-experience">Professional Experience</h2>
      <CardWrapper
        className="card"
        id="professional-experience"
        isVisible={isCardVisible["professional-experience"]}
      >
        <p>
          Throughout my career, I have worked on various projects that showcase
          my technical abilities and innovative approach. I have developed and
          maintained several web applications, focusing on functionality,
          performance, and user-centric design. My commitment to continuous
          learning and improvement drives me to stay updated with the latest
          industry trends and best practices.
        </p>
      </CardWrapper>
      <h2 id="projects">Projects</h2>
      <CardWrapper
        className="card"
        id="projects"
        isVisible={isCardVisible["projects"]}
      >
        <h3>Social Media App:</h3>
        <p>
          A comprehensive social media platform built with React and Firebase,
          featuring real-time data handling and user interactions.
        </p>
        <h3>Portfolio Website:</h3>
        <p>
          An aesthetically pleasing and modern portfolio site that highlights my
          projects and professional achievements, hosted on GitHub Pages.
        </p>
      </CardWrapper>
      <h2 id="skills">Skills</h2>
      <CardWrapper
        className="card"
        id="skills"
        isVisible={isCardVisible["skills"]}
      >
        <h3>Web Development:</h3>
        <p>
          Proficient in HTML, CSS, JavaScript, and modern frameworks like React.
        </p>
        <h3>Backend Integration:</h3>
        <p>
          Skilled in using Firebase for database management and backend
          services.
        </p>
        <h3>Deployment and CI/CD:</h3>
        <p>
          Experienced in configuring automated deployments with GitHub Actions.
        </p>
      </CardWrapper>
      <h2 id="vision">Vision</h2>
      <CardWrapper
        className="card"
        id="vision"
        isVisible={isCardVisible["vision"]}
      >
        <p>
          I am committed to delivering high-quality software solutions that meet
          the needs of users and clients. I believe in the power of technology
          to transform ideas into reality and am dedicated to making a positive
          impact through my work.
        </p>
        <p>
          Feel free to explore my portfolio and connect with me to discuss
          potential collaborations or opportunities. Let’s create something
          amazing together!
        </p>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          Back to Top
        </Link>
      </CardWrapper>
    </AboutWrapper>
  );
};

export default About;
