'use client'

import { useState } from 'react';
import styles from './Carousel.module.css';
import images from '../utils/tecnologies';
import Image from 'next/image';

export default function Counter() {
  const [count, setCount] = useState(3)

  const handleDirection = (direction: string) => {
    if (direction === 'foward' && count < images.length - 1) {
      const newCount = count + 3;
      setCount(newCount)
    }
    if (direction === 'back' && count > 3) {
      const newCount = count - 3;
      setCount(newCount)
    }
  };

  return (
    <section className={styles['carousel-display']}>
      <div className={styles['carousel-arrow']} onClick={() => handleDirection('back')}>
        Anterior
      </div>
      <div className={styles['carousel-container']}>
        {
          images.filter((image, index) => (((count - 3) <= index) && (index < count)))
          .map((e) => (
            <article key={e.name} className={styles['carousel-card']}>
              <Image
                src={e.thumb}
                alt={e.name}
                width={100}
                height={100}
                className={styles['carousel-image']}
              />
            </article>
          ))
        }
      </div>
      <div className={styles['carousel-arrow']} onClick={() => handleDirection('foward')}>
        Próximo
      </div>
      <div className={styles['carousel-controller']}>
        <button
          onClick={() => handleDirection('back')}
          className={`${styles['carousel-buttom']} ${count === 3 ? styles['btn-activated'] : ''}`}
        />
        <button
          onClick={() => handleDirection('none')}
          className={`${styles['carousel-buttom']} ${3 < count && count < images.length ? styles['btn-activated'] : ''}`}
        />
        <button
          onClick={() => handleDirection('foward')}
          className={`${styles['carousel-buttom']} ${count >= images.length ? styles['btn-activated'] : ''}`}
        />
      </div>
    </section>
  )
}