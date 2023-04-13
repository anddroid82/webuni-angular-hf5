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
  iWantTheTruth=false;

  ngOnInit(): void {
    this.createInfections();
  }

  createInfections() {
    for (let i = 0; i < 10; i++) {
      this.infections.push({
        date: new Date(2021, Math.floor(Math.random() * 11 + 1), Math.floor(Math.random() * 28)),
        tests: Math.round(Math.random() * 800)+400,
        inHospital: Math.round(Math.random() * 600+400)
      });
    }
    this.infections.sort((a,b)=>{
      return a.date.getTime()-b.date.getTime();
    });
  }

  appInfectionTruthChanged(b:any) {
    this.iWantTheTruth = b;
  }
}
