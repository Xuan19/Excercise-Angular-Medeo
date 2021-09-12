import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Meteo} from "../models/meteo";
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoApiService {

  constructor(private http: HttpClient) { }
  meteoSubject: Subject<Meteo> = new Subject<Meteo>();
  getCurrentMeteo(city: string){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},FR&lang=FR&units=metric&appid=c93d76be506aeacd7d011be17bc6a3a8`;
    this.http.get<Meteo>(url)
      .subscribe(
        (data) =>{
          console.log(data)
          this.meteoSubject.next(data);
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
