import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  getFormfields():Observable<any[]>{
    return this.http.get<any[]>('assets/template.json')
  }

}
