import React from 'react';
import style from './Greetings.module.css';
import Image from 'next/image'
import scroll from '../images/scroll-bar.png';

function Greetings (){
  return (
    <section className={style['greetings']}>
      <h3 className={style.title}>Meu nome é Romildo</h3>
      <p className={style.paragraph}>Este é o meu portfolio personalizado, onde você vai poder conhecer um pouco sobre mim e meu trabalho. </p>
      <Image
        src={scroll}
        width={50}
        height={50}
        className={style.scroll}
        alt='scroll mouse down image'
      />
    </section>
  )
};

export default Greetings;
