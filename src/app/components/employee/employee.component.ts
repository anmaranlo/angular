import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {

  notFound = false;
  employee: Employee;
  constructor(public employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe((res: any) => {
      console.log(res);
    }, (err: any) => {
      console.log(err);
    })
   }

  ngOnInit() { 
    
  } 

  

}


