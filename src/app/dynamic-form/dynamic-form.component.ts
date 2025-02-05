import { Component, ViewChild } from '@angular/core';
import { FormService } from '../service/form.service';
import { TextfieldComponent } from '../fields/textfield/textfield.component';
import { NumberFieldComponent } from '../fields/number-field/number-field.component';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailComponent } from '../fields/email/email.component';
import { ComboComponent } from '../fields/combo/combo.component';
import { RadioComponent } from '../fields/radio/radio.component';
import { CheckboxComponent } from '../fields/checkbox/checkbox.component';
import { TextAreaComponent } from '../fields/text-area/text-area.component';
import { DateComponent } from '../fields/date/date.component';
import { PhoneComponent } from '../fields/phone/phone.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [TextfieldComponent,NumberFieldComponent,EmailComponent,ComboComponent,RadioComponent,CheckboxComponent,
    TextAreaComponent,DateComponent,PhoneComponent, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  fields:any[]=[];//for storing the JSON data from the getFormFields service
  data: { [key: string]: any } = {};//for storing each field data with key as widget name
  mainData:any={};
  @ViewChild('dynamicForm') form:NgForm;
  constructor(private formService:FormService){}

  ngOnInit() {
    this.formService.getFormfields().subscribe((data) => {
      this.fields = data;
      console.log(this.fields);
    });
    // Initialize checkboxes in `data` with empty arrays
    this.fields.forEach((field) => {
      if (field.widget === 'checkbox' && !this.data[field.name]) {
        this.data[field.name] = []; // Ensuring checkboxes have default empty arrays
      }
    });
  }
  //function for handling textfield input
 updateData(value:string,key:string){
  this.data[key]=value;
 }


  SubmitForm(){
    console.log(this.form);
    //console.log(this.data);
    this.mainData=this.form.value;
    console.log( this.mainData)
  }
}
