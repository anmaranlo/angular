import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    baseUrl = environment.apiUrl;
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor( private http: HttpClient ){ }
        
    getEmployees() {
        return this.http.get(`${this.baseUrl}`);
      }
}
