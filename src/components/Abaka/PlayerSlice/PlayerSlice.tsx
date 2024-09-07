import { createSlice } from "@reduxjs/toolkit"
export interface ICombinations {
  Twins: Array<number>
  Differ: Array<number>
  'L.Street': Array<number>
  'B.Street': Array<number>
  Care: Array<number>
  Abaka: Array<number>
  Summ: Array<number>
  Bonus: Array<number>
}
export interface ISchool {
  1: Array<number>
  2: Array<number>
  3: Array<number>
  4: Array<number>
  5: Array<number>
  6: Array<number>
}
export interface IPlayer {
  name?: string
  school?: ISchool
  combos?: ICombinations
}
export interface IPlayers {
  players: IPlayer[]
}

const initialState: IPlayers = {
  players: []
}

const playersSlice = createSlice({
  name: 'creater',
  initialState,
  reducers: {
    createPlayers:(state, action) => {
      state.players =[];
      action.payload.forEach((nameOf:string) => {
        if (nameOf){
          state.players.push(
              {
                name: nameOf,
                school:{
                  1: Array(6),
                  2: Array(6),
                  3: Array(6),
                  4: Array(6),
                  5: Array(6),
                  6: Array(6),
                },
                combos: {
                  Twins: Array(6),
                  Differ:Array(6),
                  'L.Street': Array(6),
                  'B.Street': Array(6),
                  Care: Array(6),
                  Abaka: Array(6),
                  Summ: Array(6),
                  Bonus: Array(6),
                }

              })
        }



      })
    },
  },
})
export const {createPlayers} = playersSlice.actions
export default playersSlice.reducer