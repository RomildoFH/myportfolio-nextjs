import React from 'react';
import Fotoperfil from '@/components/Fotoperfil';
import styles from './Presentation.module.css';
import Greetings from '@/components/Greetings';


function Presentation() {
  return (
    <section className={styles.presentation}>
      <Fotoperfil
        source="https://i.postimg.cc/HkjYj7wx/b5df6791-15cc-4a77-81f9-946934b30b94.jpg"
      />
      <Greetings />
    </section>
  )
}

export default Presentation