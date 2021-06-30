import { Component, OnInit } from '@angular/core';
import {CountryDataService} from '../../services/country-data.service';
import { ActivatedRoute} from '@angular/router';
import { countryDetails } from '../../models/data'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-data-country',
  templateUrl: './data-country.component.html',
  styleUrls: ['./data-country.component.scss']
})
export class DataCountryComponent implements OnInit {

  constructor(private countryData: CountryDataService, 
              private activateRoute: ActivatedRoute ) { 

  }

  public chosenCountry: any;
  id: any;
  country: any;
  population: any;
  lang: any;
  capital: any;
  currency: any;
  area: any;
  picture: any;
  ile: any;

  // id2 = countryDetails.map(item => {
  //   if(item.id == 1) return item.name
  // })

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      data => {
        this.chosenCountry = data.name;
        this.id = data.id,
        this.country = data.name,
        this.population = data.population,
        this.lang = data.lang
      this.capital = data.capital; 
      this.picture = data.picture;       
    })

  }

}
