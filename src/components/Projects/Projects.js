import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import {
  ProjectsWrapper,
  BackgroundWrapper,
  ProjectItem,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
  ProjectActions,
  ShareButton,
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
    },
    {
      title: "Social Media App",
      description:
        "A comprehensive social media platform in which we can Add and Remove Posts. Posts are stored in a database and can be rendered onload. Built with React and Firebase.",
      link: "https://sjrsantos.github.io/Social-Media-App/",
      image: projectImage2,
    },
  ];

  const handleShare = (projectLink) => {
    const shareText = `Check out this project: ${projectLink}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Portfolio Project",
          text: shareText,
          url: projectLink,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      console.log("Sharing not supported on this browser.");
    }
  };

  return (
    <ProjectsWrapper>
      <BackgroundWrapper />
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectActions>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Project
            </ProjectLink>
            <ShareButton onClick={() => handleShare(project.link)}>
              Share <FaFacebook /> <FaWhatsapp /> <FaInstagram />
            </ShareButton>
          </ProjectActions>
        </ProjectItem>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
