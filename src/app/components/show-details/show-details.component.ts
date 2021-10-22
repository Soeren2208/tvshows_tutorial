import { Component, OnInit } from '@angular/core';
import { Show} from "../../model/show";
import { ShowDataService} from "../../service/show-data.service";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private showDataService: ShowDataService) { }

  ngOnInit(): void {
  }

  get detailShow(): Show{
    return this.showDataService.detailShow;
  }

}
