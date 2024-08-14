import { FC, useState } from "react";
import styles from './player.module.css'
type TPlayer = {
  name?: string
  school: {
    one: Array<number>
    two: Array<number>
    three: Array<number>
    four: Array<number>
    five: Array<number>
    six: Array<number>
  }
  combos:{
    'Twins': Array<number>
    'Differ': Array<number>
    'L.Street': Array<number>
    'B.Street': Array<number>
    'Care': Array<number>
    'Abaka': Array<number>
    'Summ': Array<number>
    'Bonus': Array<number>
  }
}
export const PlayerField:FC = () =>{
 const [player, setPlayer] = useState<TPlayer>({
  name: '',
  school: {
    'one':[],
    'two':[],
    'three':[],
    'four':[],
    'five':[],
    'six':[],
  },  
    combos:{
    'Twins':[],
    'Differ':[],
    'L.Street':[],
    'B.Street':[],
    'Care':[],
    'Abaka':[],
    'Summ':[],
    'Bonus':[]
}});

 const combinations = ['Twins','Differ','L.Street', 'B.Street','Care','Abaka', 'Summ', 'Bonus']
 return (
  <div className={styles.school}>
    <h2>{player.name}</h2>
    <section>
      <ul className={styles.schoolWrap}>
        <li className={styles.schoolPart}>
          <div className={styles.schoolCell}>1</div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
        </li>
        <li className={styles.schoolPart}>
          <div className={styles.schoolCell}>2</div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
        </li>
        <li className={styles.schoolPart}>
          <div className={styles.schoolCell}>3</div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
        </li>
        <li className={styles.schoolPart}>
          <div className={styles.schoolCell}>4</div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
        </li>
        <li className={styles.schoolPart}>
          <div className={styles.schoolCell}>5</div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
        </li>
        <li className={styles.schoolPart}>
          <div className={styles.schoolCell}>6</div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
          <div className={styles.schoolCell}></div>
        </li>
      </ul>
    </section>
    <section>
      <ul className={styles.schoolWrap}>

        {combinations.map((combination:string) => {
          return (
          <li>
              <div>{combination}</div>
              <div>{player.combos[combination as keyof TPlayer]}</div>
          </li>)
        })}
      </ul>
    </section>
    <section>
      <div>Баланс в школе: <span></span></div>
      <div>Бонусы: <span></span></div>
    </section>

  </div>
   );
}