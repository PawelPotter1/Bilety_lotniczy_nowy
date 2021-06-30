import {Injectable} from "@angular/core";
import {FLIGHTS} from "../models/mock-flights";

@Injectable({
  providedIn: 'root'
})

export class FlightService {
  getDep(): any {
    throw new Error('Method not implemented.');
  }
  flights: any;
  flightsBookingCounter = 0;
  flightBookings: Array<any> = [];
  departing: any;
  returning: any;

  constructor() {
    this.flights = FLIGHTS;
  }

  getAll() {
    return this.flights;
  }

  getItem(id: any) {
    for (var i = 0; i < this.flights.length; i++) {
      if (this.flights[i].id === parseInt(id)) {
        return this.flights[i];
      }
    }
    return null;
  }

  getDeparture(departure: any) {
    for (var i = 0; i < this.flights.length; i++) {
      if (this.flights[i].departure === departure) {
        return this.flights[i];
      }
    }
    return null;
  }


  remove(item: any) {
    this.flights.splice(this.flights.indexOf(item), 1);
  }

  // Bookings
  setDeparting(departing: any) {
    this.departing = departing;
  }

  setReturning(returning: any) {
    this.returning = returning;
  }

  getDeparting() {
    return this.departing;
  }

  getReturning() {
    return this.returning;
  }

  booking(departing: any, returning: any, bookId: any) {
    this.flightsBookingCounter = this.flightsBookingCounter + 1;
    this.flightBookings.push({
      id: this.flightsBookingCounter,
      bookId: bookId,
      departing: departing,
      returning: returning,
      totalValue: departing.price + returning.price
    });
    this.departing = null;
    this.returning = null;
    return Promise.resolve();
  }


  getBookings() {
    return Promise.resolve(this.flightBookings);
  }


}
