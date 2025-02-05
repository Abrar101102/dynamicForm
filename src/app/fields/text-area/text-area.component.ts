import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>TextAreaComponent),
      multi:true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor{
  @Input() field:any={};
  value:string='';

  onChange=(value:any)=>{}
  onTouched=()=>{};

  writeValue(value:any){
    this.value=value || "";
  }

  registerOnChange(fn:any){
    this.onChange=fn;
  }

  registerOnTouched(fn:any){
    this.onTouched=fn;
  }

  onInput(value:string){
    
    this.value=value;
    this.onChange(this.value);
    this.onTouched();

  }

}
