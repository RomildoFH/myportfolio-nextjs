import Fotoperfil from '@/components/Fotoperfil';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <Fotoperfil
          source="https://i.postimg.cc/HkjYj7wx/b5df6791-15cc-4a77-81f9-946934b30b94.jpg"
        />
      </section>
    </main>
  )
}
