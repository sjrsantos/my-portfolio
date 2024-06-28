import React from "react";
import { FaExternalLinkAlt, FaBook, FaProjectDiagram } from "react-icons/fa";
import {
  ProjectsWrapper,
  BackgroundWrapper,
  ProjectItem,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
  ProjectIcon,
} from "./Projects.styles";
import projectImage1 from "../../assets/images/chapterverse-books.png";
import projectImage2 from "../../assets/images/social-media-posts.png";

const Projects = () => {
  const projects = [
    {
      title: "Chapterverse - Web App",
      description:
        "A web app that helps users explore different books consuming an API to fetch books from OpenLibrary. Built with React, Firebase and consuming the Free API from OpenLibrary",
      link: "https://sjrsantos.github.io/Chapterverse-Web/",
      image: projectImage1,
      icon: <FaBook size={24} />,
    },
    {
      title: "Social Media App",
      description:
        "A comprehensive social media platform in which we can Add and Remove Posts. Posts are storage in a database and can be rendered onload. Built with React and Firebase.",
      link: "https://sjrsantos.github.io/Social-Media-App/",
      image: projectImage2,
      icon: <FaProjectDiagram size={24} />,
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsWrapper>
      <BackgroundWrapper />
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ProjectItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ProjectIcon>{project.icon}</ProjectIcon>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink>
              Check Project <FaExternalLinkAlt />
            </ProjectLink>
          </ProjectItem>
        </a>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
