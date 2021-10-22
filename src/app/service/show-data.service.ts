import { Injectable } from '@angular/core';
import {Show} from "../model/show";
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {
  shows: Observable<Show[]>;
  detailShow: Show=null;
  private series = 'table_show';

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {
    this.shows = af.collection(this.series).valueChanges({idField:'uid'}) as Observable<Show[]>;
  }

  async addShow(show: Show){
    try{
      const data: any = await this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q=' + show.title).toPromise();
      if(data.name != show.title){
        this.af.collection(this.series).add({
          id: show.id,
          title: show.title
        })
      }
    }
    catch(e){
      alert('Es wurde leider keine passende Serie gefunden!');
    }
  }

  updateShow(show: Show){
    this.af.collection(this.series).doc(show.uid).update({
      id: show.id,
      title: show.title
    });
  }

  deleteShow(show: Show):void{
    this.af.collection(this.series).doc(show.uid).delete();
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
