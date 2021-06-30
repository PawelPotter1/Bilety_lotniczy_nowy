import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  localWeather:any
  date: any

  constructor() { }

  ngOnInit(): void {
  }

}
