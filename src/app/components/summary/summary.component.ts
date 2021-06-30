import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API.service';
import { FlightDataService } from 'src/app/services/flight-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  arrivalCity = this.flightData.flight.arrival.city
  distance = this.flightData.flight.distance
  class = this.flightData.flight.class
  numOfTickets = this.flightData.flight.tickets
  flightCost = this.costOfFlight()
  luggageCost= this.costOfLaggage()
  additionsCost = this.costOfAdds()
  total = this.calculateTotal()
  ratesForKids = 0.5
  ratesForSeniors = 0.8
  ratesTotal = this.flightData.flight.persons.adults+this.flightData.flight.persons.kids*this.ratesForKids+this.flightData.flight.persons.seniors*this.ratesForSeniors
  priceDisplay = this.total*this.ratesTotal
  currencyInput = 'EUR';
  exchangeRates:any

  constructor(
    private APIService: APIService,
    public flightData: FlightDataService) { }

    arrivalWeather:any;

    costOfFlight(){
      let price = this.flightData.flight.price
     !this.flightData.flight.oneway ? price = price+this.flightData.flight.returnflight.price : ''
     this.flightData.flight.class === 'firstclass'? price = price*2 : ''
     this.flightData.flight.class === 'bussines'? price = price*1.5 : ''
     this.flightData.flight.class === 'premium'? price = price*1.3 : ''
     return price
    }

    costOfLaggage(){
      let price = 0;
      this.flightData.flight.luggage.cabin ? price = price + 15 : ''
      this.flightData.flight.luggage.checkInSmall ? price = price + 30 : ''
      this.flightData.flight.luggage.checkInBig ? price = price + 40 : ''
      return price
    }

    costOfAdds(){
      let price = 0;
      this.flightData.flight.additions.priority_check_in ? price = price + 15 : ''
      this.flightData.flight.additions.carry_on_bag ? price = price + 10 : ''
      this.flightData.flight.additions.trolley_bag ? price = price + 10 : ''
      this.flightData.flight.additions.priority_boarding ? price += 20 : ''
      return price
    }

    calculateTotal(){
      let price = this.flightCost + this.luggageCost + this.additionsCost;
      return price
    }

    exchangePrice(){
      let rateInput = this.exchangeRates.conversion_rates[this.currencyInput];
      this.priceDisplay = this.total * this.ratesTotal * rateInput 
    }

  ngOnInit(): void {
    this.APIService.getExchangeRates().subscribe((data)=>{
      this.exchangeRates = data;
    })

    this.APIService.getWeather(this.arrivalCity).subscribe((data)=>{
      this.arrivalWeather = data;
    })
  }
}
