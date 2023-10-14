'use client';
import React, { useEffect, useState } from 'react';
import style from './Greetings.module.css';
import Image from 'next/image'
import scroll from '../images/scroll-bar.png';

function Greetings() {

  const [phrase, setPhrase] = useState('first');
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [action, setAction] = useState('write');

  const firstPhrase = 'Olá, meu nome é Romildo';
  const secoundPhrase = 'Eu sou um desenvolvedor web full-stack';

  const writePhrase = (letters: string, phrase: string) => {
    const index = letters.length;
    letters += phrase[index]
    setTimeout(() => {
      setCurrentPhrase(letters);
    }, 100);
  };

  const erasePhrase = () => {
    setTimeout(() => {
      const newPhrase = currentPhrase.slice(0, -1);
      setCurrentPhrase(newPhrase);
    }, 75);
  };

  useEffect(() => {
    const newFirstPhrase = firstPhrase + '    ';
    const newScoundPhrase = secoundPhrase + '    ';
    let letters = currentPhrase;
    if (phrase === 'first' && action === 'write' && currentPhrase !== newFirstPhrase) {
      writePhrase(letters, newFirstPhrase);
    }
    if (letters === newFirstPhrase || letters === newScoundPhrase) {
      setAction('erase');
    }

    if (action === 'erase' && currentPhrase.length > 0){
      erasePhrase();
    }

    if (action === 'erase' && currentPhrase.length === 0) {
      setAction('write');
      phrase === 'first' ? setPhrase('secound') : setPhrase('first');
    }

    if (phrase === 'secound' && action === 'write' && currentPhrase !== newScoundPhrase) {
      writePhrase(letters, newScoundPhrase);
    }
  }, [currentPhrase, action]);


  return (
    <section className={style['greetings']}>
      <h3 className={style.title}>{currentPhrase}</h3>
      <p className={style.paragraph}>Este é o meu portfolio personalizado, onde você vai poder conhecer um pouco sobre mim e meu trabalho. </p>
      <Image
        src={scroll}
        width={50}
        height={50}
        className={`${style.scroll} ${style['blink-class']} ${style['translate-vertical']}`}
        alt='scroll mouse down image'
      />
    </section>
  )
};

export default Greetings;
