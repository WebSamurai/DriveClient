import { Input } from '@angular/core';
import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePikerComponent),
  multi: true
};
@Component({
  selector: 'app-time-piker',
  templateUrl: './time-piker.component.html',
  styleUrls: ['./time-piker.component.less'],
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class TimePikerComponent implements OnInit {

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
