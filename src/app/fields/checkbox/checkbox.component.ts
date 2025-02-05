import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>CheckboxComponent),
      multi:true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor{
  @Input() field:any={};
  value:string []=[];

  onChange=(value:any)=>{}
  onTouched=()=>{};

  writeValue(value:any){
    this.value=value;
  }

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }

  onChecked(event:any,option:string){
    if (!this.value) this.value = [];
    if(event.target.checked){
      this.value = [...this.value, option];
    }
    else{
      this.value=this.value.filter(item=>item!==option)
    }
    this.onChange(this.value);
    this.onTouched();
  }
}
