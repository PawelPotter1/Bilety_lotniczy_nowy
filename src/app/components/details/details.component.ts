import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  seats = this.flightData.flight.seats;
  numOfTickets = this.flightData.flight.tickets;
  ticketType = this.flightData.flight.class
  displayError = false;

  constructor(
    public flightData: FlightDataService,
    private router: Router,) { }
  @Output() toggleSeatEvent = new EventEmitter();


  enoughTickets(){
    if(this.numOfTickets <= this.seats.length){
      this.displayError = false;
      return true
    } return false
  }

  checkNumOfSeats(){
    if(this.enoughTickets()){
      this.router.navigate(['/summary']);
    } else {
      this.displayError = true
    }
  }

  removeSeat($event:any) {
    this.toggleSeatEvent.emit($event);
  }

  ngOnInit(): void {
    this.displayError = false
  }

}
