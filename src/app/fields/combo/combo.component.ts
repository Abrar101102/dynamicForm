import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-combo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './combo.component.html',
  styleUrl: './combo.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboComponent),
      multi: true,
    }
  ]
})
export class ComboComponent implements ControlValueAccessor {
  @Input() field: any = {}; // Default to an empty object to avoid undefined errors
  value: any = '';

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? ''; // Ensure UI updates when value changes
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(selectedValue: any): void {
    this.value = selectedValue;
    this.onChange(this.value);
    this.onTouched();
  }
}
