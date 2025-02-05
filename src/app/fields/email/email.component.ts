import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>EmailComponent),
      multi:true,
    }
  ]
})
export class EmailComponent implements ControlValueAccessor {

@Input() field:any={};
value:any;

onChange=(value:any)=>{}
onTouched=()=>{};

writeValue(value: any): void {
  this.value=value||'';
}

registerOnChange(fn: any): void {
  this.onChange=fn;
}

registerOnTouched(fn: any): void {
  this.onTouched=fn;
}

handleInput(input:string):void{
  this.value=input;
  this.onChange(this.value);
  this.onTouched();
}

}
