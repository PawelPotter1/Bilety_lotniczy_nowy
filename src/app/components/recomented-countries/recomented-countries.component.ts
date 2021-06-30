import { Component, OnInit } from '@angular/core';
import { CountryDataService} from '../../services/country-data.service';
import { Router } from '@angular/router';
import { countryDetails } from '../../models/data';
// import { DeclarationListEmitMode } from '@angular/compiler';
//import { countryDetails } from '../data-country/data';

@Component({
  selector: 'app-recomented-countries',
  templateUrl: './recomented-countries.component.html',
  styleUrls: ['./recomented-countries.component.scss']
})
export class RecomentedCountriesComponent implements OnInit {

  constructor(private countryData: CountryDataService, 
              private router:Router) {  }

  ngOnInit(): void {
  }

chosenCountry: any;
buttonValue!: string;

data = countryDetails;

toCountryDetails(param: any) {
  this.countryData.chosenCountry = param;

  this.router.navigate(['countrydetail'],
      {queryParams:
        {
        id: param.id,
        name: param.name,
        capital: param.details.capital,
        population: param.details.population,
        lang: param.details.language,
        picture: param.details.picure
        }
      })
  } 

}
