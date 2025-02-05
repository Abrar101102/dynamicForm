import { Component,forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>FileComponent),
      multi:true
    }
  ]
})
export class FileComponent implements ControlValueAccessor{
  @Input() field:any={};
  value:any;
  
  onChange=(value:any)=>{};
  onTouched=()=>{};

  writeValue(value:any){
    this.value=value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}


