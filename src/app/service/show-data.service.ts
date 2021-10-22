import { Injectable } from '@angular/core';
import {Show} from "../model/show";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {
  shows: Show[] = [];
  detailShow: Show=null;

  constructor(private httpClient: HttpClient) {
    this.shows.push(new Show(1, "Game of Throns"));
    this.shows.push(new Show(2, "Die Brücke"));
    this.shows.push(new Show(3, "Der Wald"));
  }

  addShow(show: Show){
    this.shows.push(show);
  }

  updateShow(show: Show){
    this.shows = this.shows.filter(s => show!= s);
    this.shows.push(show);
  }

  deleteShow(show: Show):void{
    this.shows= this.shows.filter(s => s!=show);
  }

  async showShowDetails(show: Show){
    try{
      const data: any = await this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q=' + show.title).toPromise();
      show.summary = data.summary;
      /**
       if(data.image.medium.includes('http')){
        show.image = data.image.medium.replace('http', 'https');
      }
       else{
        show.image = data.image.medium;
      }*/
      show.image=data.image.medium;
      this.detailShow = show;
    } catch(e){
      alert('Es wurde leider keine passende Serie gefunden!')
    }

  }
}
