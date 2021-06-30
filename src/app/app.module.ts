import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginGuard } from './login.guard';

//Material imports
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchFlightComponent } from './components/searchflight/searchflight.component';
import { LoginComponent } from './components/login/login.component';
import { DialogLogin } from './components/login/login.component';
import { SeatingComponent } from './components/seating/seating.component';
import { DetailsComponent } from './components/details/details.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecomentedCountriesComponent } from './components/recomented-countries/recomented-countries.component';
import { DataCountryComponent } from './components/data-country/data-country.component';
 import { FlightlistComponent } from './components/flightlist/flightlist.component';
 import { CheckflightComponent } from './components/checkflight/checkflight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchFlightComponent,
    LoginComponent,
    DialogLogin,
    SeatingComponent,
    DetailsComponent,
    SummaryComponent,
    FooterComponent,
    PageNotFoundComponent,
    RecomentedCountriesComponent,
    DataCountryComponent,
     FlightlistComponent,
     CheckflightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    LoginComponent,
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
