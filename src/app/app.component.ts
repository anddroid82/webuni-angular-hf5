import { Component, OnInit } from '@angular/core';

export interface Infection {
  date: Date,
  tests: number,
  inHospital: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webuni-angular-hf5';
  infections: Infection[] = [];
  iWantTheTruth=true;

  ngOnInit(): void {
    this.createInfections();
  }

  createInfections() {
    for (let i = 0; i < 10; i++) {
      this.infections.push({
        date: new Date(2021, Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 20)),
        tests: Math.round(Math.random() * 1000),
        inHospital: Math.round(Math.random() * 2000)
      });
    }
  }
}
