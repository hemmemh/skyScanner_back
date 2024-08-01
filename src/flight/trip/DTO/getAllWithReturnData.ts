import { Trip } from "src/schemas/Trip.schema";

export interface getAllWithReturnData {
    trips:[Trip[], Trip[]]
    minTime:number
    maxTime:number
    minDepartureTime:number
    maxDepartureTime:number
}