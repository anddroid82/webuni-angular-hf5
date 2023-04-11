import { Directive, ElementRef, Input } from '@angular/core';
import { Infection } from './app.component';

@Directive({
  selector: '[appInfection]'
})
export class InfectionDirective {
  @Input() set appInfection(inf: Infection) {
    //if (inf.)
  }
  @Input() set appInfectionTruth(truth:boolean) {
    if (truth) {
      this.elementRef.nativeElement.style.backgroundColor='blue';
      this.elementRef.nativeElement.style.color='white';
    }
  }
  constructor(private elementRef: ElementRef<HTMLElement>) {

  }

}
