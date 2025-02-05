import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-number-field',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.css',
  providers:[
       {
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>NumberFieldComponent),
        multi:true,
      }
  ]
})
export class NumberFieldComponent implements ControlValueAccessor{
  @Input() field:any={};
  value:number|null=null;

  onChange=(value:number)=>{};
  onTouched=() => {};

  writeValue(value:any):void{
    this.value = value;
  }

  registerOnChange(fn:any){
    this.onChange=fn;
  }
  registerOnTouched(fn:any){
    this.onTouched=fn;
  }


  handleInput(value:string){
    const input=(value !== null && value !== undefined && value !== '')  ? Number(value) : null;
    
    this.value=input;
    this.onChange(this.value);
    this.onTouched();
  }
}
