import Image from 'next/image'
import NavBar from './navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
    </main>
  )
}
