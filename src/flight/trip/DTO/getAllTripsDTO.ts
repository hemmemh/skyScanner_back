export class getAllTripsDTO {
    from: string
    to: string
    depart: string
    return: string
    seatNumber: string
    seatClass: string
    sort:Sort
    time:string
    stops:string
    departureTimeFiltr:string
}

export type Sort =  'optimal' | 'cheapest' | 'fastest'

export type StopValue = 'direct' | 'oneTransfer' | 'twoTransfer'