import { Component, OnInit, ViewChild,} from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginComponent) login:any;
  localWeather:any
  date: any

  constructor(
    public userData: UserDataService,
    public APIService: APIService,
    private router: Router ) { }

  logIn(){
    this.login.openDialog()
  }
  logOut(){
    window.location.assign('')
  }
  ngOnInit(): void {
    this.date = new(Date)
    setInterval(()=>{this.date = new(Date)},60000)
  
      navigator.geolocation.getCurrentPosition(success, error)
      function success(position:any) {
        const userCoords = {lat: position.coords.latitude, lon: position.coords.longitude}
        weather(userCoords)
      };
      function error() {
        console.log('You dont set geolocation!')   
      }

    const weather = (userCoords:any) => {this.APIService.getWeatherByCoords(userCoords).subscribe((data:any)=>{
      this.localWeather = data;
    })}
  }
  

}
