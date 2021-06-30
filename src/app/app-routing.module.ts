import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './components/searchflight/searchflight.component';
import { SeatingComponent } from './components/seating/seating.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { LoginGuard } from './login.guard';
import { RecomentedCountriesComponent } from './components/recomented-countries/recomented-countries.component';
import { DataCountryComponent } from './components/data-country/data-country.component';
 import { FlightlistComponent } from './components/flightlist/flightlist.component';


const routes: Routes = [
  {path: "", component: SearchFlightComponent},
  {path: "seating", component: SeatingComponent, canActivate: [LoginGuard]},
  {path: "summary", component: SummaryComponent, canActivate: [LoginGuard]},
  {path: 'country', component: RecomentedCountriesComponent},
  {path: 'countrydetail',component: DataCountryComponent},
  {path: 'flightlist', component: FlightlistComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
