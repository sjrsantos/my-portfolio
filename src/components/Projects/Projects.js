// src/components/Projects/Projects.js
import React from "react";
import { ProjectsWrapper, ProjectItem, ProjectLink } from "./Projects.styles";

const Projects = () => (
  <ProjectsWrapper>
    <h1>My Projects</h1>
    <ProjectItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <h2>Chapterverse - Web App</h2>
      <ProjectLink
        href="https://sjrsantos.github.io/Chapterverse-Web/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Project
      </ProjectLink>
    </ProjectItem>
    <ProjectItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <h2>Social Media App</h2>
      <ProjectLink
        href="https://sjrsantos.github.io/Social-Media-App/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Project
      </ProjectLink>
    </ProjectItem>
    {/* Add more projects */}
  </ProjectsWrapper>
);

export default Projects;
