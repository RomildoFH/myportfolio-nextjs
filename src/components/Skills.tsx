import React from 'react';
import styles from './Skills.module.css';
import Carousel from './Carousel';

function Skills() {
  return (
    <section className={styles['skills-container']}>
      <h3>Skills</h3>
      <Carousel />
    </section>
  )
}

export default Skills