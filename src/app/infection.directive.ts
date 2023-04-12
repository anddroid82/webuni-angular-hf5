import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Infection } from './app.component';

@Directive({
  selector: '[appInfection]'
})
export class InfectionDirective {
  private _truth:boolean = false;
  private _inf:Infection | undefined = undefined;

  @Input() set appInfection(inf: Infection) {
    this._inf = inf;
    //pozitív esetek számára egy random érték
    const positiveTests = Math.floor(Math.random()*inf.tests);
    if (positiveTests / inf.tests > 0.025) {
      this.elementRef.nativeElement.style.color='red';
    }else{
      this.elementRef.nativeElement.style.color='green';
    }
  }

  @Input() set appInfectionTruth(truth:boolean) {
    this._truth = truth;
    if (this._truth) {
      this.elementRef.nativeElement.style.backgroundColor='blue';
      this.elementRef.nativeElement.style.color='white';
    }/*else{
      this.elementRef.nativeElement.style.backgroundColor='inherit';
      this.elementRef.nativeElement.style.color='black';
    }*/
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  @HostListener('window:keydown',['$event'])
  onKeyDown(e:KeyboardEvent) {
    console.log(e.code);
    this.appInfectionTruth = !this._truth;
    /*if (e.altKey && e.key.c) {
      this._truth = !this._truth;
    }*/
  }

}
