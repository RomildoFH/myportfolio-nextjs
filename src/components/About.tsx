'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

function About() {
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
    <section ref={componentRef} className={`${styles.about}`}>
      <h2>Sobre mim</h2>
      <p className={styles.paragraph}>
        Nascido em Garanhuns, Pernambuco, sou Romildo, um apaixonado por tecnologia com uma sólida formação em engenharia civil, engenharia de segurança e gestão de projetos, além de mais de 8 anos de experiência no campo. Tive a oportunidade de liderar equipes e contribuir significativamente para o sucesso das empresas onde trabalhei. Em 2022, decidi seguir meu sonho de trabalhar com tecnologia e me matriculei na Trybe, onde desenvolvi mais de 40 projetos full-stack, incluindo e-commerce, integrações com APIs e sistemas responsivos. Minhas habilidades abrangem HTML, CSS, JavaScript, ReactJS, TypeScript, MySQL, MongoDB e práticas avançadas como TDD e Arquitetura de Software. Estou animado com a perspectiva de aplicar meu conhecimento para criar soluções inovadoras e impactantes.
        <br />
        <br />
        Meu foco está em entregar produtos de alta qualidade, priorizando a experiência do usuário e a segurança. Estou ansioso para colaborar em projetos que tragam benefícios reais para as pessoas por meio da tecnologia e continuarei a me aprimorar e manter-me atualizado com as tendências do setor para atingir esse objetivo.
      </p>
    </section>
  );
}

export default About;
