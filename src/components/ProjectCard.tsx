'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/image';


function ProjectCard(props: { name: string; thumbs: string; description: string; url: string; }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const componentRef = useRef(null);

  const { name, thumbs, description, url } = props;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Component is now in the viewport');
          setIsIntersecting(true);
          entry.target.classList.add(styles.show);
          entry.target.classList.add(styles.transitionFinished);
        } else {
          console.log('Component is no longer in the viewport');
          setIsIntersecting(false);
          entry.target.classList.add(styles.hidden);
          entry.target.classList.add(styles.leftHidden);
          entry.target.classList.remove(styles.show);
          entry.target.classList.remove(styles.transitionFinished);
        }
      });
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <article ref={componentRef} className={styles['project-card']}>
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
  );
}

export default ProjectCard;

