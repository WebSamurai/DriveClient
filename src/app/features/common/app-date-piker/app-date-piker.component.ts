import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-date-piker',
  template: `<input #datecontrol type="text" placeholder="Datepicker" class="form-control" [ngModel]="innerValue" [disabled]="disabled"
   bsDatepicker (bsValueChange)="change($event)"  [bsConfig]="{containerClass:'theme-dark-blue', showClearButton: true, clearPosition: 'right' }"/>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppDatePikerComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AppDatePikerComponent),
    multi: true
  }]
})
export class AppDatePikerComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() disabled = false;

  // tslint:disable-next-line:variable-name
  private _innerValue: Date;
  private initialvalue: Date = null;
  // tslint:disable-next-line:ban-types
  public onModelChange: Function = () => { };
  // tslint:disable-next-line:ban-types
  public onvaliChange: Function = () => { };
  onChanged: any = () => { };
  onTouched: any = () => { };
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    return null;
  }
  set innerValue(value: any) {
    this._innerValue = value;
    this.onChanged(this._innerValue);
    this.onTouched();
  }
  get innerValue() {
    return this._innerValue;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onvaliChange = fn;
  }
  writeValue(obj: any): void {
    if (obj != null) {
      this.initialvalue = obj.toDate();
      this._innerValue = obj.toDate();
    } else {
      this._innerValue = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  change(event) {
    this.innerValue = event;
    if (this.initialvalue?.toDateString() === this.innerValue?.toDateString()) {
      return;
    }
    this.onModelChange(this._innerValue);
    this.initialvalue = undefined;
  }

  ngOnInit(): void {

  }

}
