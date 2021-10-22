import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';
import {ShowDataService} from "../../service/show-data.service";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  editShow: Show = null;

  constructor(private showDataService: ShowDataService) {}

  ngOnInit(): void {
  }

  get shows(): Show[]{
    return this.showDataService.shows;
  }

  edit(show: Show): void{
    this.editShow = show;
  }

  toEdit(show: Show): boolean {
    if (!this.editShow) {
      return false;
    } else if (this.editShow !== show) {
      return false;
    } else {
      return true;
    }
  }

  saveEdit(): void{
    this.showDataService.updateShow(this.editShow);
    this.editShow=null;
  }

  deleteShow(show: Show): void{
    this.showDataService.deleteShow(show);
  }

  showDetails(show: Show){
    this.showDataService.showShowDetails(show);
  }


}
