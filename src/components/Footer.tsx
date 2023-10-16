"use client"
import React from 'react';
import { WhatsappLogo, Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <section className={styles['contacts-section']}>
        <h3 className={styles['contacts-title']}>CONTATO</h3>
        <a className={styles.link} href='https://wa.me/5587999241374' target='_blank'>
          <WhatsappLogo size={30} className={styles.icons} />
          <p>+55(87)9.9924-1374</p>
          <br/>
        </a>
        <a className={styles.link} href='https://github.com/RomildoFH' target='_blank'>
          <GithubLogo size={30} className={styles.icons} />
          <p>RomildoFH</p>
          <br />
        </a>
        <a className={styles.link} href='https://www.linkedin.com/in/this-romildo/' target='_blank'>
          <LinkedinLogo size={30} className={styles.icons} />
          <p>this-romildo</p>
          <br />
        </a>
        <a className={styles.link} href='mailto:romildo.silvafilho1@gmail.com' target='_blank'>
          <Envelope size={30} className={styles.icons} />
          <p>romildo.silvafilho1@gmail.com</p>
          <br />
        </a>
      </section>
      <section className={styles['footer-phrase']}>
        <article>
          <p>{`"Acredito muito na sorte, e acho que quanto mais trabalho, mais a tenho."`}</p>
          <p>Thomas Jefferson</p>
        </article>
      </section>
    </footer>
  )
}

export default Footer;
