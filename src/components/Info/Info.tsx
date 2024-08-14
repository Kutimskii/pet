import { FC } from "react";
import styles from './main.module.css'
import foto from '../../images/foto.jpg'
export const Info:FC = () =>{
  return(
    <main className={styles.info}>
      <div className={styles.wrapper}>
        <p className={styles.infoText}>
          <p className={styles.textHead}>Hi! I'm Kostya, a developer based in Russia.</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img className={styles.foto} src={foto} alt="my photo"/>
      </div>
    </main>
  )
}