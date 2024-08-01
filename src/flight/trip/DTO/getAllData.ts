import { Trip } from "src/schemas/Trip.schema";

export interface getAllData {
    trips:Trip[][]
    minTime:number
    maxTime:number
    minDepartureTime:number
    maxDepartureTime:number
}