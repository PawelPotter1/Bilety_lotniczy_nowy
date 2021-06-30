import { Component, OnInit, ViewChild } from '@angular/core';
import { airports } from '../../models/airports'
import { FlightDataService } from '../../services/flight-data.service'
import { UserDataService } from '../../services/user-data.service'
import { FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  control = new FormControl('', Validators.required);
  today = new Date().toISOString().split('T')[0];

  departure:any;
  arrival:any;
  class = '';
  date = '';
  returningdate = '';
  oneway = true;
  //disabled = false;
  disableSelect = new FormControl(false);
  tickets = {adults: 1, kids: 0,seniors: 0};
  isDuplicate = false;
  routeSeats = '';
  airports = airports;

  constructor(
    public flightData: FlightDataService,
    public userData: UserDataService,
    private router: Router,
    ) { }

    ngDoCheck() {
      if(this.oneway) this.returningdate == null
    }

  sendData(){
    this.flightData.flight.departure = this.departure
    this.flightData.flight.arrival = this.arrival
    this.flightData.flight.oneway = this.oneway
    this.flightData.flight.class = this.class
    this.flightData.flight.date = this.date
    this.flightData.flight.returningdate = this.returningdate
    this.flightData.flight.persons.adults = this.tickets.adults
    this.flightData.flight.persons.kids = this.tickets.kids
    this.flightData.flight.persons.seniors = this.tickets.seniors
    this.flightData.flight.tickets = Number(this.tickets.adults)+Number(this.tickets.kids)+Number(this.tickets.seniors)
    this.flightData.calculateDistance()
  }

  @ViewChild(LoginComponent)
  private login!: LoginComponent

  isUserLoggedIn(){
    if(!this.userData.isLogged){
    this.login.openDialog()
    } else {
      this.sendData()
      this.router.navigate(['/flightlist']);
    }
  }

  ngOnInit(): void {
    this.flightData.flight.tickets = 1
  }
}
