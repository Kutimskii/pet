import { FC } from 'react'
import styles from './header.module.css'
export const Header:FC = () =>{
 return (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <span>Konstantin Kutimskii</span>
      <nav>
        <ul className={styles.listInfo}>
          <li className={styles.listInfoElement}><a href="#">About</a></li>
          <li className={styles.listInfoElement}><a href="https://github.com/Kutimskii">GitHub</a></li>
          <li className={styles.listInfoElement}><a href="https://spb.hh.ru/resume/7f10c825ff0c1ca2330039ed1f473238597579">СV</a></li>
          <li className={styles.listInfoElement}><a href="https://spb.hh.ru/resume/7f10c825ff0c1ca2330039ed1f473238597579">Play Abaka</a></li>
        </ul>
      </nav>
    </div>
  </header>)
}