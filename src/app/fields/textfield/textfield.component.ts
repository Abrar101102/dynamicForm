import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>TextfieldComponent),
      multi:true,
    }
  ]
})
export class TextfieldComponent implements ControlValueAccessor{
  @Input() field: any = {};
  @Output() onChangeData=new EventEmitter<string>();
  value: string = ''; // Stores input value

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string) {
    this.value = value || ''; // Ensure value is a string
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onInputChange(value: string) {
    this.value = value;
    this.onChange(value);
    this.onChangeData.emit(this.value)// Notify the parent about the change
  }

  onBlur() {
    this.onTouched(); // Notify the parent when the input is touched
  }

}
