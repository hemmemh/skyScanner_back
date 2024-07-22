import dayjs from "dayjs";

export const isSameDay = (firstDay:dayjs.Dayjs, secondDay:dayjs.Dayjs) =>{
    
    if ( 
        firstDay.date() === secondDay.date() &&
        firstDay.year() === secondDay.year() &&
        firstDay.month() === secondDay.month()) 
        {
        return true
    }

    return false

}

export const getRandomElementFromArray=(arr:any[])=> {
    if (arr.length === 0) {
      return undefined; // или выбросить ошибку, если массив пуст
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  export  const getRandomInteger=(min:number, max:number)=> {

    return Math.floor(Math.random() * (max - min + 1)) + min; // включительно обоих концов
  }

  export  const getArrayCombinations= <T>(a:T[][], b:T[][]):[T[],T[]][]=> {
    console.log('g', a,'i', b);
    
    let combinations = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            combinations.push([a[i], b[j]]);
        }
    }
    return combinations;
}