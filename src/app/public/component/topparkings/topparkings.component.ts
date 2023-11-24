import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topparkings',
  templateUrl: './topparkings.component.html',
  styleUrls: ['./topparkings.component.css']
})
export class TopparkingsComponent {
  constructor(private router: Router) {
  }
  clickReview() {
    this.router.navigate(['./review']);
  }
}
