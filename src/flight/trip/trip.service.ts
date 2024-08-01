import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { tripArray } from 'src/data/dataForDb';
import { Trip } from 'src/schemas/Trip.schema';
import { Any, Between, In, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { getAllTripsDTO } from './DTO/getAllTripsDTO';
import * as dayjs from 'dayjs'
import { CityService } from '../city/city.service';
import { CompanyService } from '../company/company.service';
import { AirBus } from 'src/schemas/AirBus.schema';
import { AirbusService } from '../airbus/airbus.service';
import { SeatClass } from 'src/schemas/SeatClass.schema';
import { getArrayCombinations, getMinMaxDepartureTime, getMinMaxTime, getRandomElementFromArray, getRandomInteger, isSameDay } from './lib/lib';
import { City } from 'src/schemas/City.schema';
import { getTripsWithReturnsDTO } from './DTO/getTripsWithReturnsDTO';
import { getTripsDTO } from './DTO/getTripsDTO';
import { SeatClassService } from '../seat-class/seat-class.service';
import { getAllData } from './DTO/getAllData';



@Injectable()
export class TripService {

    constructor(
        @InjectRepository(Trip)
        private TripRepo: Repository<Trip>,
        private cityService:CityService,
        private companyService:CompanyService,
        private seatClassService:SeatClassService,
        private airbusService:AirbusService,
    ){}



    async getAllWithReturn(query:getAllTripsDTO, departDate:number, returnDate:number): Promise<[Trip[], Trip[]][]> {
       
        try {
          let resultDepartTrips:Trip[][] = []
          let resultReturnTrips:Trip[][] = []
          const departTime = dayjs(+departDate)
          const returnTime = dayjs(+returnDate)

          let departureTrips = await this.TripRepo.find({
            where:{
                departure_city:{uid:query.from},
                //arrival_city:{uid:query.to},
                seats:+query.seatNumber,
                seatClass:{uid:query.seatClass}
            }
                })
   
   
  
          let returnTrips = await this.TripRepo.find({
            where:{
                departure_city:{uid:query.to},
                //arrival_city:{uid:query.from},
                seats:+query.seatNumber,
                seatClass:{uid:query.seatClass}
            }
                })
  
      
          
                departureTrips = departureTrips.filter(el=>{
                  return isSameDay(dayjs(+el.departure_time), departTime)
              })
  
              returnTrips = returnTrips.filter(el=>{
                return isSameDay(dayjs(+el.departure_time), returnTime)
            })
  
            for(const departureTrip of departureTrips){
              const startTrips =  [...departureTrips.filter(el=>el.uid !== departureTrip.uid).map(el=>el.uid)]
         
              
             const data =  await this.getTransfers(query.to ,departureTrip, startTrips , departureTrip.departure_city, departureTrip)
    
             resultDepartTrips = [...resultDepartTrips, ...data.resultTrips]
            }

            console.log('II',returnTrips);
            for(const returnTrip of returnTrips){
              const startTrips =  [...returnTrips.filter(el=>el.uid !== returnTrip.uid).map(el=>el.uid)]
         
              
             const data =  await this.getTransfers(query.from ,returnTrip, startTrips , returnTrip.departure_city, returnTrip)
      
             resultReturnTrips = [...resultReturnTrips, ...data.resultTrips]
            }

  
          
            

  
          const trips =   getArrayCombinations<Trip>(resultDepartTrips ,resultReturnTrips )

  
          switch (query.sort) {
            case 'optimal': return trips
           // case 'cheapest': return trips.sort((a,b)=>(a[0].price + a[1].price) - (b[0].price + b[1].price))
           // case 'fastest': return trips.sort((a,b)=>{
           //   const first = Math.max(a[0].arrival_time -a[0].departure_time,a[1].arrival_time - a[1].departure_time )
           //   const second = Math.max(b[0].arrival_time -b[0].departure_time,b[1].arrival_time - b[1].departure_time )
          //    return first - second
           // })
            default:
              break;
          }
        } catch (error) {
          throw new HttpException('недостаточно данных', HttpStatus.BAD_REQUEST);
        }

      }  


      async getTransfers(endCity:string, startTrip:Trip,startTrips:string[], startCity:City, trip:Trip ,  tripsToCity:Trip[] = [], resultTrips:Trip[][] = [], maxTarnsfer = 4){
        const startTripsTwo = []
          const maxDiff = 21600000
          let endTime  = +trip.arrival_time + maxDiff
         const  startDay = dayjs(+trip.arrival_time).date()
         const  endDay = dayjs(endTime).date()
         if (startDay !== endDay && startTrip.uid === trip.uid) {
          endTime = dayjs(+trip.arrival_time).endOf('d').valueOf()

         }

         let nextTrips = [startTrip]


      if (startTrip.departure_city.uid !== startCity.uid) {
        nextTrips = await this.TripRepo.find({
          where:{
              uid:Not(In(startTrips)),
              departure_city:startCity,
              seats:+trip.seats,
              seatClass:trip.seatClass,
              departure_time:Between(trip.arrival_time, endTime),
            
          }
              })
      }
       
         
          
 

          
             
          
     
          for(const nextTrip of nextTrips){
         
            if (nextTrip.arrival_city.uid === endCity) {
            
               
              tripsToCity.push(nextTrip)
              if (tripsToCity.length > maxTarnsfer) {           
                break
       
              }
              resultTrips.push([...tripsToCity])

              
              tripsToCity.pop()
        
              continue
            }

            

            tripsToCity.push(nextTrip)


            if (tripsToCity.length > maxTarnsfer) {           
              break
     
            }
            if (startTrip.departure_city.uid == nextTrip.arrival_city.uid) {
              continue
            }
  
            const data = await  this.getTransfers(endCity, startTrip, startTrips, nextTrip.arrival_city , nextTrip, tripsToCity, resultTrips)

            tripsToCity = [...data.tripsToCity]
            resultTrips = [...data.resultTrips]
          
          }   
  
         
          tripsToCity.pop()
          return {resultTrips, tripsToCity}

       
      }

      async getAll(query:getAllTripsDTO, departDate:number): Promise<getAllData> {
       try {

        let resultTrips:Trip[][] = []
        const departTime = dayjs(+departDate)
         
 
        let departureTrips = await this.TripRepo.find({
            where:{
                departure_city:{uid:query.from},
                //arrival_city:{uid:query.to},
                seats:+query.seatNumber,
                seatClass:{uid:query.seatClass}
            }
                })

  

    
        
              departureTrips = departureTrips.filter(el=>{
                return isSameDay(dayjs(+el.departure_time), departTime)
            })



            for(const departureTrip of departureTrips){
              const startTrips =  [...departureTrips.filter(el=>el.uid !== departureTrip.uid).map(el=>el.uid)]
         
              
             const data =  await this.getTransfers(query.to ,departureTrip, startTrips , departureTrip.departure_city, departureTrip)
    
             resultTrips = [...resultTrips, ...data.resultTrips]
            }

  
  


    

        switch (query.sort) {
          case 'optimal': resultTrips.sort((a,b)=>{
            const AlastIndex = a.length - 1
            const BlastIndex = b.length - 1
      
            
            const first = +a[AlastIndex].arrival_time - +a[0].departure_time
            const second = +b[BlastIndex].arrival_time - +b[0].departure_time
            const weightPrice =1000; // вес цены
            const weightDuration = 0.5; // вес времени полета
            const sumPriceA = a.reduce((prev:0, current:Trip)=> current.price + prev ,0)
            const sumPriceb = b.reduce((prev:0, current:Trip)=> current.price + prev ,0)
            const optimalityA = weightPrice * sumPriceA + weightDuration * first;
            const optimalityB = weightPrice * sumPriceb + weightDuration * second;
            return optimalityA - optimalityB;

          })
          case 'cheapest': resultTrips.sort((a,b)=>{
            const sumPriceA = a.reduce((prev:0, current:Trip)=> current.price + prev ,0)
            const sumPriceb = b.reduce((prev:0, current:Trip)=> current.price + prev ,0)
          return sumPriceA -  sumPriceb
          })
          case 'fastest': resultTrips.sort((a,b)=>{
            const AlastIndex = a.length - 1
            const BlastIndex = b.length - 1
            const first = a[AlastIndex].arrival_time - a[0].departure_time
            const second =b[BlastIndex].arrival_time - b[0].departure_time
            return first - second
          })
          default:
            break;
        }
        const {minTime, maxTime} = getMinMaxTime(resultTrips)
        const {minDepartureTime, maxDepartureTime} = getMinMaxDepartureTime(resultTrips)
        return {
          trips:resultTrips,
          minTime,
          maxTime,
          minDepartureTime,
          maxDepartureTime


         }

       } catch (error) {
 
        
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
       }
     
   
      }  


    async getTripsWithReturns(depart:string, returnDate:string): Promise<[Trip[], Trip[]]>{
      try {

        const  departTrips = []
        const  returnTrips = []
        for(const tripUid of  depart.split(',')){
          const trip =await this.TripRepo.findOne({where:{uid:tripUid}})
          console.log('ttt', trip);
          
          if (trip) {
            departTrips.push(trip)
          }
        
        }

        for(const tripUid of returnDate.split(',')){
          const trip = await this.TripRepo.findOne({where:{uid:tripUid}})
          if (trip) {
            returnTrips.push(trip)
          }
       
        }

        return [departTrips, returnTrips]
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }



    async getTrips(depart:string): Promise<Trip[]>{
       try {
        console.log('depart.split(',')', depart.split(','));
        
        const trips = []
        for(const tripUid of depart.split(',')){
          const trip =await this.TripRepo.findOne({where:{uid:tripUid}})
          if (trip) {
            trips.push(trip)
          }
        
        }
        return trips
       } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
       }
    }

      async generate(numbers = 5,startDate:number, endDate:number, startPrice:number, endPrice:number){
        const cities = await this.cityService.getAll()
        const companies  = await this.companyService.getAll()
        const airBuses  = await this.airbusService.getAll()
        const seatClass =  await this.seatClassService.getOneByName('эконом класс')
        while(numbers > 0){
          const departure_time = getRandomInteger(startDate, endDate)
          const arrival_time = getRandomInteger(departure_time,departure_time + 18000000)
          const price =  getRandomInteger(startPrice, endPrice)
          const seats = 1
        
          const departure_city = getRandomElementFromArray(cities)
          const indexOfcity =  cities.findIndex(el=>el.uid === departure_city.uid)
          let newCities = [...cities]
          newCities.splice(indexOfcity,1)
          const arrival_city = getRandomElementFromArray(newCities)
          const company = getRandomElementFromArray(companies)
          const airBus = getRandomElementFromArray(airBuses)
  
         
     
        
         await this.TripRepo.save({
            seats,
            airBus,
            company,
            departure_city,
            arrival_city,
            departure_time,
            arrival_time,
            paths:[],
            price,
            seatClass,
         })
         numbers-=1
        }
      
      
      
      
        
      
      
        }

    async createMany() {
        const trips = tripArray
        for(const trip of trips){
           await this.TripRepo.save(trip);
        }
         //return this.getAll()
      }
}
