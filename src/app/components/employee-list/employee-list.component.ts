import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';


@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {


   deptId: string = '';
  employees: any[] = [];

  constructor(private empService: EmployeeService, private router: Router) {}

  search() {
    this.employees = this.empService.getEmployeesByDept(this.deptId);
  }

  viewEmployee(id: number) {
    this.router.navigate(['/employee', id]);
  }
}


