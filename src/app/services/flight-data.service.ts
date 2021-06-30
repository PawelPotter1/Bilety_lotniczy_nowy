import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  getAll(): any {
    throw new Error('Method not implemented.');
  }
  flight = {
    departure: {code: '', city:'', country: '', region: ''},
    arrival: {code: '', city:'', country: '', region: ''},
    flight: {id: 0, name: '', deptime: '', arrtime: '', totaltime: '', steps: '',class:'', logo:''},
    returnflight: {price: 0, airplane: '',id: 0, name: '', deptime: '', arrtime: '', totaltime: '', steps: '',class:'', logo:''},
    oneway: true,
    date: '',
    returningdate: '',
    class: 'standard',
    tickets: 1,
    price: 0,
    airplane: '',
    distance: 'local',
    persons: {adults: 1, kids: 0, seniors: 0},
    seats: Array(),
    luggage: {personal: true, cabin: false, checkInSmall: false, checkInBig: false,},
    additions: {priority_check_in: false, priority_boarding: false, carry_on_bag: false,trolley_bag: false},
  }

  calculateDistance(){
    if(this.flight.departure.region === this.flight.arrival.region){
      if(this.flight.departure.country === this.flight.arrival.country){
        this.flight.distance = 'local'
        return
      }
      this.flight.distance = 'long'
      return
    }
    this.flight.distance = 'continental'
  }

  constructor() { }
}
