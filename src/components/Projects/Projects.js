import React from "react";
import {
  ProjectsWrapper,
  ProjectItem,
  ProjectLink,
  BackgroundWrapper,
} from "./Projects.styles";

const Projects = () => (
  <ProjectsWrapper>
    <BackgroundWrapper />
    <h1>My Projects</h1>
    <a
      href="https://sjrsantos.github.io/Chapterverse-Web/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProjectItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <h2>Chapterverse - Web App</h2>
        <ProjectLink>Check Project</ProjectLink>
      </ProjectItem>
    </a>
    <a
      href="https://sjrsantos.github.io/Social-Media-App/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProjectItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <h2>Social Media App</h2>
        <ProjectLink>Check Project</ProjectLink>
      </ProjectItem>
    </a>
    {/* Add more projects */}
  </ProjectsWrapper>
);

export default Projects;
