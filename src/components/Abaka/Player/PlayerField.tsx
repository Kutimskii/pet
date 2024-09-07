import { FC } from "react";
import styles from './player.module.css'
import { IPlayer } from "../PlayerSlice/PlayerSlice";
export const PlayerField:FC<{player:IPlayer}> = ({player}) =>{
 const combinations = ['Twins','Differ','L.Street','B.Street','Care','Abaka','Summ']
 const schoolComb = ['1','2','3','4','5','6'];
 return (
     <div className={styles.playerField}>
         <div className={styles.school}>
             <h2>{player.name}</h2>
             <ul className={styles.schoolWrap}>
                 {schoolComb.map(el => {
                     return (<li className={styles.schoolPart} key={el}>{el}
                         {player.school ?
                             Object.entries(player.school).map(cell => {
                                 return (
                                     <div className={styles.schoolCell} key={cell[0]}>{cell[1]}</div>)
                             }) : null}
                     </li>)
                 })}

             </ul>
             <ul className={styles.schoolWrap}>
                 {combinations.map(el => {
                     return (<li className={styles.schoolPart} key={el}>{el}
                         {player.combos ?
                             Object.entries(player.combos).map(cell => {
                                 return (
                                     <div className={styles.schoolCell} key={cell[0]}>{cell[1]}</div>)
                             }) : null}
                     </li>)
                 })}

             </ul>

         </div>
         {/*<div>*/}
         {/*    <ul className={styles.combinationsBtns}>*/}
         {/*        {schoolComb.map(el => <li>{el}</li>)}*/}
         {/*        {combinations.map(el => <li>{el}</li>)}*/}


         {/*    </ul>*/}
         {/*</div>*/}
         <div>Баланс в школе: <span></span></div>
         <div>Бонусы: <span></span></div>
     </div>

 );
}