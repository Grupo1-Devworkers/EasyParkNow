import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../../share/services/base.service";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationComponent implements OnInit{
  parkingLots: Array<any> = [];
  district: any;

  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {
    this.baseService.getAll().subscribe((response: any) => {
      this.parkingLots = response;
    });
  }

  searchParking() {
    this.parkingLots = this.parkingLots.filter(parkingLot => parkingLot.district == this.district);
  }
}
