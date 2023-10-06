import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

function ProjectCard(props: { name: string; thumbs: string; description: string; url: string; }) {
  const { name, thumbs, description, url } = props;
  return (
    <article className={styles['project-card']}>
      <img
        className={styles['project-image']}
        src={thumbs}
        alt={name}
      />
      <div className={styles['project-data']}>
        <h3 className={styles['project-title']}>{name}</h3>
        <p className={styles['project-description']}>{description}</p>
        <a href={url} target='_blank' className={styles['project-link']}>Abrir Projeto</a>
      </div>
    </article>
  )
}

export default ProjectCard;
