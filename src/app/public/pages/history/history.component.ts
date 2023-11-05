import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  rating: number;
  date: string;
  Entryhour: string;
  Exithour: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Estacionamiento Los Portales', rating: 3.5, date: '24/05/2023',Entryhour: '19:00', Exithour: '22:00'},
  {position: 2, name: 'Estacionamiento Los Rosales', rating: 1.0, date: '15/10/2023',Entryhour: '10:30', Exithour: '11:30'},
  {position: 3, name: 'Estacionamiento Girasoles', rating: 4.0, date: '06/05/2023',Entryhour: '15:40', Exithour: '17:00'},

];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol', 'demo-Entryhour', 'demo-Exithour'];
  dataSource = ELEMENT_DATA;
}
