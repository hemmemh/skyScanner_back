import * as dayjs from 'dayjs'
import { Trip } from "src/schemas/Trip.schema";

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


export const getMinMaxTime = (trips:Trip[][])=>{
  let minTime = +trips[0][0].arrival_time -  +trips[0][0].departure_time
  let maxTime = +trips[0][0].arrival_time -  +trips[0][0].departure_time

  trips.forEach(el=>{
    minTime = Math.min(minTime, +el[el.length - 1].arrival_time - +el[0].departure_time)
    maxTime = Math.max(maxTime, +el[el.length - 1].arrival_time - +el[0].departure_time)
  })
  return {minTime, maxTime}
}



export const getMinMaxDepartureTime = (trips:Trip[][])=>{
  let { hour: minHour, minute: minMinute } = getTimeParts(+trips[0][0].departure_time);
  let { hour: maxHour, minute: maxMinute } = getTimeParts(+trips[0][0].departure_time);

  trips.forEach(ms=>{
    const { hour, minute } = getTimeParts(+ms[0].departure_time);

    if (hour < minHour || (hour === minHour && minute < minMinute)) {
      minHour = hour;
      minMinute = minute;
    }

    if (hour > maxHour || (hour === maxHour && minute > maxMinute)) {
      maxHour = hour;
      maxMinute = minute;
    }



  })
  console.log(minHour  + minMinute, maxMinute + maxHour );
  

  return {minDepartureTime:(minHour * 60 )+ minMinute, maxDepartureTime:maxMinute + (maxHour * 60)}
}


export const getMinMaxTimeWithReturn = (trips:[Trip[], Trip[]][])=>{
  let minTime = +trips[0][0][0].arrival_time -  +trips[0][0][0].departure_time
  let maxTime = +trips[0][0][0].arrival_time -  +trips[0][0][0].departure_time

  trips.forEach(el=>{
    minTime = Math.min(minTime, +el[0][el[0].length - 1].arrival_time - +el[0][0].departure_time)
    maxTime = Math.max(maxTime, +el[0][el[0].length - 1].arrival_time - +el[0][0].departure_time)
  })
  return {minTime, maxTime}
}

export const getMinMaxDepartureTimeWithReturn = (trips:[Trip[], Trip[]][])=>{
  let { hour: minHour, minute: minMinute } = getTimeParts(+trips[0][0][0].departure_time);
  let { hour: maxHour, minute: maxMinute } = getTimeParts(+trips[0][0][0].departure_time);

  trips.forEach(ms=>{
    const { hour, minute } = getTimeParts(+ms[0][0].departure_time);

    if (hour < minHour || (hour === minHour && minute < minMinute)) {
      minHour = hour;
      minMinute = minute;
    }

    if (hour > maxHour || (hour === maxHour && minute > maxMinute)) {
      maxHour = hour;
      maxMinute = minute;
    }



  })
  console.log(minHour  + minMinute, maxMinute + maxHour );
  

  return {minDepartureTime:(minHour * 60 )+ minMinute, maxDepartureTime:maxMinute + (maxHour * 60)}
}

const getTimeParts = (ms) => {
  const date = dayjs(ms);
  return { hour: date.hour(), minute: date.minute() };
};