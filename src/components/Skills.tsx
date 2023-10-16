'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import Carousel from './Carousel';

function Skills() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const componentRef = useRef(null);

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
    <section ref={componentRef} className={`${styles['skills-container']}`}>
      <h3>Skills</h3>
      <Carousel />
    </section>
  );
}

export default Skills;
