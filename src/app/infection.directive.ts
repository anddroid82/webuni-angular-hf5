import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Infection } from './app.component';

@Directive({
  selector: '[appInfection]'
})
export class InfectionDirective {
  private _truth: boolean = false;
  private _inf: Infection | undefined = undefined;
  private positiveTests:number = 0;

  @Output() appInfectionTruthChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  @Input() set appInfection(inf: Infection) {
    this._inf = inf;
    //pozitív esetek számára egy random érték
    this.positiveTests = Math.floor(Math.random() * this._inf!.tests);
    this.formatByInfection();
  }

  @Input() set appInfectionTruth(truth: boolean) {
    this._truth = truth;
    if (this._truth) {
      this.elementRef.nativeElement.style.backgroundColor = 'blue';
      this.elementRef.nativeElement.style.color = 'white';
    } else {
      this.formatByInfection();
    }
  }

  formatByInfection() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
    if (this.positiveTests / this._inf!.tests > 0.025) {
      this.elementRef.nativeElement.style.color = 'red';
    } else {
      this.elementRef.nativeElement.style.color = 'green';
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.altKey && e.code == 'KeyT') {
      this.appInfectionTruth = true;
      this.appInfectionTruthChange.emit(true);
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    this.appInfectionTruth = false;
    this.appInfectionTruthChange.emit(false);
  }

}
