import styles from './page.module.css';
import Presentation from '@/components/Presentation';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
