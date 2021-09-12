import { Component, OnInit } from '@angular/core';
import {MeteoApiService} from "../../services/meteo-api.service";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  meteo: any;

  constructor(private meteoApiService: MeteoApiService) { }

  ngOnInit(): void {
    this.meteoApiService.meteoSubject.subscribe(data => {
      this.meteo = data
      console.log("Nouvelle météo reçue : ",this.meteo);
    });
  }

}
