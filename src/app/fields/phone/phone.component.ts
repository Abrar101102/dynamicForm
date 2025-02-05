import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>PhoneComponent),
      multi:true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneComponent),
      multi: true
    }
  ]
})
export class PhoneComponent implements ControlValueAccessor{
  @Input() field:any={};
  value:number;

  onChange=(value:number)=>{};
  onTouched=() => {};

  writeValue(value:any):void{
    this.value = value ; 
  }

  registerOnChange(fn:any){
    this.onChange=fn;
  }
  registerOnTouched(fn:any){
    this.onTouched=fn;
  }


  handleInput(value:string){
    
    this.value=Number(value);
    this.onChange(this.value);
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.field) {
      const value = control.value?.toString() || '';
     

      // Required validation
      if (this.field.required && !value) {
        return { required: true };
      }

      // Length validation
      if (value.length !== this.field.length) {
        // console.log('Validation Error:', { length: { required:this.field.length, actualLength: value.length } });
        const error= { length: { requiredLength: this.field.length, actualLength: value.length } };
        return error;
   
      }
    }
    return null;
  }
}

