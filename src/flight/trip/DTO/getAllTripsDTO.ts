export class getAllTripsDTO {
    from: string
    to: string
    depart: string
    return: string
    seatNumber: string
    seatClass: string
    sort:Sort
}

export type Sort =  'optimal' | 'cheapest' | 'fastest'