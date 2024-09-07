import { FC, useState } from "react";
import { Input, Button } from 'antd';
// import { IPlayers } from "../PlayerSlice/PlayerSlice";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useDispatch } from "react-redux";
import { createPlayers } from "../PlayerSlice/PlayerSlice";
// import {playersSlice} from "../PlayerSlice/PlayerSlice";
import styles from './namesForm.module.css'
export const NamesForm:FC = () =>{
  const dispatch = useDispatch();
  // const [namesPlayers, setNamesPlayers] = useState<string[]>([])
  const [defaultPlayers, setDefaultPlayers] = useState<number | null>(2);
  const [firstPlayers, setFirstPlayer] = useState<string>('')
  const [secondPlayers, setSecondPlayers] = useState<string>('')
  const [thirdPlayers, setThirdPlayers] = useState<string>('')
  const [fourthPlayers, setFourthPlayers] = useState<string>('')

  const onChange = (e: RadioChangeEvent) => {
    setDefaultPlayers(e.target.value);
  };

  const createFields = (...players:string[])=>{
      const filledFields = players.filter((name => !!name));
      if(filledFields.every((name:string) => !!name)){
          dispatch(createPlayers(players));
          setDefaultPlayers(null)
      }
  }
 return (
     defaultPlayers &&
 <>
     <div className={styles.formContainer}>
         <form className={styles.form}>
             <div className={styles.wrapperInputs}>
                 <div className={styles.inputWrap}>
                     <Input placeholder="Name" className={styles.input} onChange={(e)=> setFirstPlayer(e.target.value)}/>
                     <Input placeholder="Name" className={styles.input} onChange={(e)=> setSecondPlayers(e.target.value)}/>
                     <Input placeholder="Name" className={styles.input}
                            disabled={defaultPlayers === 2} required
                            onChange={(e)=> setThirdPlayers(e.target.value)}
                     />
                     <Input placeholder="Name" className={styles.input}
                            disabled={defaultPlayers !== 4}
                            onChange={(e)=> setFourthPlayers(e.target.value)}
                     />
                 </div>
                 <div>
                     <Radio.Group onChange={onChange} value={defaultPlayers} className={styles.radioGroup}>
                         <Radio value={2}>В игре 2 игрока</Radio>
                         <Radio value={3}>В игре 3 игрока</Radio>
                         <Radio value={4}>В игре 4 игрока</Radio>
                     </Radio.Group>
                 </div>
             </div>
             <Button type="primary" className={styles.btnCreateFields}
                     onClick={()=>createFields(firstPlayers,secondPlayers,thirdPlayers,fourthPlayers)}
             >Создать игровые поля</Button>
         </form>

     </div>
 </>
 )
}