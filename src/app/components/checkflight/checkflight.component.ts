import { Component, OnInit } from '@angular/core';

import { FlightService } from 'src/app/services/flight.service';
import { FlightDataService } from 'src/app/services/flight-data.service';
import { FLIGHTS } from 'src/app/models/mock-flights';

@Component({
  selector: 'app-checkflight',
  templateUrl: './checkflight.component.html',
  styleUrls: ['./checkflight.component.scss']
})
export class CheckflightComponent implements OnInit {
  public flights: any;
  public flightsdata: any;

  constructor(public flightService: FlightService, public flightDataService: FlightDataService) { 
     this.flights = this.flightService.getAll();
  }

  displayedColumns: string[] = ['id','name','logo', 'departure', 'totaltime', 'from','steps','price','class'];
  dataSource = FLIGHTS;
  price: number = 0;
  airplane: string = '';
  id: number = 0;
  name: string = "LOT";
  totaltime: string = '';
  departure: string = '';
  arriving: string = '';
  departureCode: string = '';
  arrivingCode: string = '';
  steps: string = '';
  class: string = '';
  logo: string = '';
  oneway: boolean = true;


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // getFlight(flight:any) {
  //   this.flightDataService.flight.price=flight.price
  //   this.price=flight.price
  //   this.flightDataService.flight.price=flight.airplane
  //   this.airplane=flight.airplane
  //   this.flightDataService.flight.flight.id = flight.id
  //   this.flightDataService.flight.flight.name = flight.name
  //   this.flightDataService.flight.flight.deptime = flight.departing
  //   this.flightDataService.flight.flight.arrtime = flight.arriving
  //   this.flightDataService.flight.flight.totaltime = flight.totaltime
  //   this.flightDataService.flight.flight.steps = flight.steps
  //   this.flightDataService.flight.flight.class = flight.class
  //   this.flightDataService.flight.flight.logo = flight.logo
  // }

  getAirplane(flight:any) {
    this.flightDataService.flight.price=flight.airplane
    this.airplane=flight.airplane
  }

  chooseFlight(flight: any) {
    this.flightService.setReturning(flight);
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

  ngOnInit(): void {

    this.departure = this.flightDataService.flight.departure.city
    this.arriving = this.flightDataService.flight.arrival.city
    this.departureCode = this.flightDataService.flight.departure.code
    this.arrivingCode = this.flightDataService.flight.arrival.code
    this.oneway = this.flightDataService.flight.oneway
  }

}

