import React from 'react';
import FotoperfilProps from '@/interface/FotoperfilProps';
import styles from './Fotoperfil.module.css';

function Fotoperfil(props: FotoperfilProps) {
  const { source } = props;
  return (
    <div
      className={styles['foto-perfil']}
      style={{
        backgroundImage: `url(${source})`,
        width: '200px',
        height: '200px',

      }}
    />
  )
}

export default Fotoperfil;
