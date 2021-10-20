import { Injectable } from '@angular/core';
import {Show} from "../model/show";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {
  shows: Show[] = [];

  constructor() {
    this.shows.push(new Show(1, "Game of Throns"));
    this.shows.push(new Show(2, "Die Brücke"));
    this.shows.push(new Show(3, "Der Wald"));
  }
}
