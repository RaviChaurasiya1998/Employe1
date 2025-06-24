import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {


   employee: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee = this.empService.getEmployeeById(id);
  }

  save() {
    this.empService.updateEmployee(this.employee);
    this.router.navigate(['/']);
  }

  delete() {
    this.empService.deleteEmployee(this.employee.id);
    this.router.navigate(['/']);
  }
}


