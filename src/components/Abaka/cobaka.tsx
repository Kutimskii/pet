export default class Cobaka {
  constructor(){
  }
  throw(){
    // return random int from 1 to 6, 
    const random = []
    for (let i = 0; i < 5; i += 1){
      random.push(Math.ceil(Math.random() * 6))
    }
    return random
  }

  chekComb (array:[]) {

    let res:any = {}
    array.forEach((el:number)=>{
      res[el] ? res[el] += 1 : res[el] = 1
    })
    let keys = Object.values(res)
      if (keys.find(el => el === 4)){
      return 'Care'
    }
      if (keys.find(el => el === 5)){
      return 'Abaka'
    }
    const twOrDif = keys.reduce((acc:string ,el):string => {
        if (el === 2 || el === 3){
        acc += el
      }
        if (acc === '22'){
        acc = 'Twins'
      }
        if (acc === '23' || acc === '32'){
        acc = 'Differ'
      }
      return acc
    },'')
      if(twOrDif.length > 2){
      return twOrDif
    }
      if (Object.values(res).every(el => el === 1) && !!res['1']){
      return console.log('L str')
    }
      if (Object.values(res).every(el => el === 1) && !!res['2']){
      return console.log('B str')
    }
    
    }
}