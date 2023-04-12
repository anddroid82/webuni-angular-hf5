import { Pipe, PipeTransform } from '@angular/core';
import { Infection } from './app.component';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'infection'
})
export class InfectionPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }
  transform(value: Infection, iWantTheTruth=false): unknown {
    const dateString=this.datePipe.transform(value.date, 'yyyy-MM-dd');
    const tests = iWantTheTruth?value.tests:value.tests*2;
    const newInfections=iWantTheTruth?'nem ismert':Math.max(Math.floor(Math.random()*500+1),Math.floor(value.tests*0.05));
    const inHospital=iWantTheTruth?value.inHospital:Math.floor(value.inHospital/3);
    return `(${dateString}) - A mintavételek száma: ${tests}; az újonnan azonosított fertőzöttek száma: ${newInfections}; a kórházban lévők száma, akik mindannyian oltatlan, idős, krónikus betegek: ${inHospital}.`;
  }

}
