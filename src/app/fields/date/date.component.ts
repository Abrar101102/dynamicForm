import { AfterViewInit, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-date',
  standalone: true,
  imports: [FormsModule,NgbDatepickerModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
})
export class DateComponent {
  @Input() field: any = {};
  model:NgbDateStruct;

  onChange = (val: any) => {}; 
  onTouched = () => {};

  writeValue(value: string) {
    if (value) {
      const dateParts = value.split('-'); // Expecting format "mm-dd-yyyy"
      this.model = {  
        month: +dateParts[0],  
        day: +dateParts[1],  
        year: +dateParts[2]
      };
    } else {
      this.model = null; 
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

 
  onDateSelect(date: NgbDateStruct) {
    this.model = date;
    const formattedDate = `${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}-${date.year}`;
    this.onChange(formattedDate); // Update parent component
    this.onTouched();
  }
}
