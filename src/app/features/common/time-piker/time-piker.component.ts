import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePikerComponent),
  multi: true
};
@Component({
  selector: 'app-time-piker',
  template: `<timepicker [(ngModel)]="innerValue" (ngModelChange)="change()" [disabled]="disabled"></timepicker> `,
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class TimePikerComponent implements OnInit, ControlValueAccessor {

  @Input() disabled = false;

  public innerValue: Date;
  private initialvalue: Date = null;

  // tslint:disable-next-line:ban-types
  public onModelChange: Function = () => { };
  constructor() { }
  writeValue(obj: any): void {
    if (obj != null) {
      this.initialvalue = obj.toDate();
      this.innerValue = obj.toDate();
    } else {
      this.innerValue = null;
    }
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  change() {
    if (this.initialvalue?.toDateString() === this.innerValue?.toDateString()) {
      return;
    }
    this.onModelChange(this.innerValue);
    this.initialvalue = undefined;
  }

  ngOnInit(): void {
  }


}
