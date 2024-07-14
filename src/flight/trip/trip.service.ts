import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { tripArray } from 'src/data/dataForDb';
import { Trip } from 'src/schemas/Trip.schema';
import { Repository } from 'typeorm';
import { getAllTripsDTO } from './DTO/getAllTripsDTO';
import * as dayjs from 'dayjs'
import { CityService } from '../city/city.service';
import { CompanyService } from '../company/company.service';
import { AirBus } from 'src/schemas/AirBus.schema';
import { AirbusService } from '../airbus/airbus.service';
import { SeatClass } from 'src/schemas/SeatClass.schema';
import { getArrayCombinations, getRandomElementFromArray, getRandomInteger, isSameDay } from './lib/lib';



@Injectable()
export class TripService {

    constructor(
        @InjectRepository(Trip)
        private TripRepo: Repository<Trip>,
        private cityService:CityService,
        private companyService:CompanyService,
        private airbusService:AirbusService,
    ){}



    async getAllWithReturn(query:getAllTripsDTO, departDate:number, returnDate:number): Promise<[Trip, Trip][]> {
       
        try {
          const departTime = dayjs(+departDate)
          const returnTime = dayjs(+returnDate)
   
          let departureTrips = await this.TripRepo.find({
              where:{
                  departure_city:{uid:query.from},
                  arrival_city:{uid:query.to},
                  seats:+query.seatNumber,
                  seatClass:{uid:query.seatClass}
              }
                  })
  
          let returnTrips = await this.TripRepo.find({
            where:{
                departure_city:{uid:query.to},
                arrival_city:{uid:query.from},
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
  
  
  
          const trips =   getArrayCombinations<Trip>(departureTrips ,returnTrips )
  
          switch (query.sort) {
            case 'optimal': return trips
            case 'cheapest': return trips.sort((a,b)=>(a[0].price + a[1].price) - (b[0].price + b[1].price))
            case 'fastest': return trips.sort((a,b)=>{
              const first = Math.max(a[0].arrival_time -a[0].departure_time,a[1].arrival_time - a[1].departure_time )
              const second = Math.max(b[0].arrival_time -b[0].departure_time,b[1].arrival_time - b[1].departure_time )
              return first - second
            })
            default:
              break;
          }
        } catch (error) {
          throw new HttpException('недостаточно данных', HttpStatus.BAD_REQUEST);
        }

      }  

      async getAll(query:getAllTripsDTO, departDate:number): Promise<Trip[]> {
       try {
        const departTime = dayjs(+departDate)
         console.log('wwww');
         
 
        let departureTrips = await this.TripRepo.find({
            where:{
                departure_city:{uid:query.from},
                arrival_city:{uid:query.to},
                seats:+query.seatNumber,
                seatClass:{uid:query.seatClass}
            }
                })

  

    
        
              departureTrips = departureTrips.filter(el=>{
                return isSameDay(dayjs(+el.departure_time), departTime)
            })

  



    

        switch (query.sort) {
          case 'optimal': return departureTrips.sort((a,b)=>{
            const first = a.arrival_time - a.departure_time
            const second =b.arrival_time - b.departure_time
            const weightPrice =1000; // вес цены
            const weightDuration = 0.5; // вес времени полета
            const optimalityA = weightPrice * a.price + weightDuration * first;
            const optimalityB = weightPrice * b.price + weightDuration * second;
            return optimalityA - optimalityB;

          })
          case 'cheapest': return departureTrips.sort((a,b)=>(a.price + a.price) - (b.price + b.price))
          case 'fastest': return departureTrips.sort((a,b)=>{
            const first = a.arrival_time - a.departure_time
            const second =b.arrival_time - b.departure_time
            return first - second
          })
          default:
            break;
        }
       } catch (error) {
        throw new HttpException('недостаточно данных', HttpStatus.BAD_REQUEST);
       }
     

      }  

      async generate(numbers = 5,startDate:number, endDate:number, startPrice:number, endPrice:number){
        const cities = await this.cityService.getAll()
        const companies  = await this.companyService.getAll()
        const airBuses  = await this.airbusService.getAll()
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
      
         
         const  seatClass:SeatClass =  {
          "name": "эконом класс",
          "multiplier": 1,
          "uid": "69cea099-b745-4fa8-921a-1e33d0948d79",
          trips:[]
      }
        
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
