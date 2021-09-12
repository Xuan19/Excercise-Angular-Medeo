import { Component, OnInit } from '@angular/core';
import {MeteoApiService} from "../../services/meteo-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private meteoApiService: MeteoApiService) { }

  city !: string;

  ngOnInit(): void {
  }

  searchCity(city: string) : void {
    this.meteoApiService.getCurrentMeteo(city);
  }
}
