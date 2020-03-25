import { TestBed, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee';

describe('EmployeeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EmployeeService]
        });
    });

    it('should be create', inject([EmployeeService], (service: EmployeeService) => {
        expect(service).toBeTruthy();
    }));
});