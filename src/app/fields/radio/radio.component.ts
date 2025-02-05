import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>RadioComponent),
      multi:true,
    }
  ]
})
export class RadioComponent implements ControlValueAccessor{
  @Input() field:any={};
  value:string='';

  onChange=(value:any)=>{}
  onTouched=()=>{};

  writeValue(value:any){
    this.value=value ||'';
  }

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
registerOnTouched(fn: any): void {
  this.onTouched=fn;
}
onOptionChange(option:string){
  this.value=option;
  this.onChange(this.value);
  this.onTouched();

}

}
