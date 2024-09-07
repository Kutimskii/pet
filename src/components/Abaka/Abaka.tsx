import { FC } from 'react';
// import Cobaka from './cobaka';
import { PlayerField } from './Player/PlayerField';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NamesForm } from './NamesForm/NamesForm';
import styles from './abaka.module.css'
export const Abaka:FC = () =>{
  const createdPlayers = useSelector((state:RootState)=> state.create);
  console.log(createdPlayers)
  // const state = new Cobaka();
 return (
     <>
         <NamesForm/>
         <div className={styles.player}>
             {createdPlayers.players.map((player) => {
                 return <PlayerField player={player} key={player.name}/>})}
         </div>
         </>
         );
         }