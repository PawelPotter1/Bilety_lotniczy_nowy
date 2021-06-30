import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss']
})
export class SeatingComponent implements OnInit {
  numOfRows!:number[];
  numOfPremiumRows!:number[];
  numOfBussinesRows!:number[];
  numOfFirstClassRows!:number[];

  seats = this.flightData.flight.seats;
  numOfTickets = this.flightData.flight.tickets;
  
  isPremium:any;
  isBussines:any;
  isFirstClass:any;
  
  constructor(public flightData: FlightDataService) { }
  
  ngAfterViewInit(){this.highlightSelected()}

  ngOnInit(): void {
    this.isPremium = this.flightData.flight.class === 'premiumeconomy'? true:false
    this.isBussines = this.flightData.flight.class === 'bussines'? true:false
    this.isFirstClass = this.flightData.flight.class === 'firstclass'? true:false

    switch (this.flightData.flight.airplane){
      case 'Embraer E-190':
        this.numOfRows = this.numToArray(8);
        this.numOfPremiumRows = this.numToArray(4);
        this.numOfBussinesRows = this.numToArray(4)
        this.numOfFirstClassRows = this.numToArray(0)
        break
      case 'Airbus A320':
        this.numOfRows = this.numToArray(11);
        this.numOfPremiumRows = this.numToArray(7);
        this.numOfBussinesRows = this.numToArray(7)
        this.numOfFirstClassRows = this.numToArray(0)
        break
      case 'Airbus A380':
        this.numOfRows = this.numToArray(19);
        this.numOfPremiumRows = this.numToArray(8);
        this.numOfBussinesRows = this.numToArray(13)
        this.numOfFirstClassRows = this.numToArray(2)

    }
  }
  numToArray(length:number) {
    return Array.from({length: length}, (v, i) => i + 1);
  }

  highlightSelected(){
    for(let seat of this.seats){
      let elem = document.getElementById(seat);
      elem!.classList.toggle('selected')
    }
  }

  toggleSeat(event:any){
    let seatID:any = event.target.innerText;
    this.highlightSelected();
    if (this.seats.includes(seatID)){
      this.seats.splice(this.seats.indexOf(seatID),1);
    } else if (!this.enoughTickets()) {
      this.seats.push(seatID);
    }
    this.highlightSelected();
  } 

  enoughTickets(){
    if(this.numOfTickets <= this.seats.length){
      return true
    } return false
  }
}
