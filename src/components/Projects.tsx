import React from 'react';
import styles from './Projects.module.css';
import projects from '../utils/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className={`${styles['projects-container']}`}>
      <h2>Meus projetos</h2>
      {
        projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            thumbs={project.thumbs}
            description={project.description}
            url={project.url}            
          />
        ))
      }
    </section>
  )
}

export default Projects