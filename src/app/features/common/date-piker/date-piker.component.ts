import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePikerComponent),
  multi: true
};
@Component({
  selector: 'app-date-piker',
  templateUrl: './date-piker.component.html',
  styleUrls: ['./date-piker.component.less'],
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class DatePikerComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;

  public innerValue: Date;
  // tslint:disable-next-line:ban-types
  public onModelChange: Function = () => { };
  constructor() { }
  writeValue(obj: any): void {
    if (obj != null) {
      this.innerValue = obj.date();
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
    this.onModelChange(this.innerValue);
  }

  ngOnInit(): void {
  }

}
