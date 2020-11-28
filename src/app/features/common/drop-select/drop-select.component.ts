import { EventEmitter, forwardRef } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from './SelectItem';
const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropSelectComponent),
  multi: true
};
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'drop-select',
  templateUrl: './drop-select.component.html',
  styleUrls: ['./drop-select.component.less'],
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class DropSelectComponent implements OnInit, ControlValueAccessor {
  public value: any;
  @Input()
  options: SelectItem[] = [];
  @Input() disabled = false;
  @Output()
  Change = new EventEmitter<SelectItem>();
  // tslint:disable-next-line:ban-types
  public onModelChange: Function = () => { };
  public ontouched = () => { };
  constructor() { }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public change(e) {
    this.ontouched();
    this.onModelChange(this.value);
    this.Change.emit(this.value);
  }
  ngOnInit(): void {
  }

}

