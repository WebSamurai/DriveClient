import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNil, isNull } from 'lodash';
const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ImageControlComponent),
  multi: true
};
@Component({
  selector: 'app-image-control',
  templateUrl: './image-control.component.html',
  styleUrls: ['./image-control.component.less'],
  providers: [TYPE_CONTROL_ACCESSOR]
})
export class ImageControlComponent implements OnInit, ControlValueAccessor {
  public photo: any;
  @Input() clasName = 'mr-3 rounded-circle img-thumbnail shadow-sm';
  @Input() disabled = false;
  @Input() ReadOnly = false;
  @Input() defaultImage = 'profile.png';
  private formats = ['data:image/png;base64,', 'data:image/jpg;base64,', 'data:image/jpeg;base64,'];
  // tslint:disable-next-line:ban-types
  public onModelChange: Function = () => { };
  constructor() { }
  writeValue(obj: any): void {
    if (this.isPhoto(obj)) {
      this.photo = `assets/images/${this.defaultImage}`;
    }
    else {
      this.photo = `data:image/png;base64,${obj}`;
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

  ngOnInit(): void {
  }
  isPhoto(obj: any) {
    return isNil(obj) || obj === '';
  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.photo = reader.result;
    let data: any;
    for (const format of this.formats) {
      data = this.photo.replace(format, '');
    }

    this.onModelChange(data);

  }

}
