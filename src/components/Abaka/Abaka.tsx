import { FC } from 'react';
import Cobaka from './cobaka';
import { PlayerField } from './Player/Player';
export const Abaka:FC = () =>{
  const state = new Cobaka();
 return (
 <>
  <PlayerField/>
  {state.throw().map(el=><><div></div></>)}
 </>);
}