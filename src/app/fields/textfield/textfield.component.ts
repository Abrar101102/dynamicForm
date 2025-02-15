import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,FormsModule, NgForm, NgModel } from '@angular/forms';

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
export class TextfieldComponent {
  @Input() field: any = {};
  @Input() form :NgForm;
  @ViewChild('name') name!: NgModel;
  @Output() onChangeData=new EventEmitter<string>();
  value: string = ''; // Stores input value

  ngAfterViewInit() {
   
      // Check if form already has this control (avoid errors)
      if (!this.form.controls[this.field.widget]) {
        this.form.controls[this.field.widget] = this.name.control;
      }
  }

  onInputChange(value: string) {
 
    this.onChangeData.emit(this.value)// Notify the parent about the change
  }


}
