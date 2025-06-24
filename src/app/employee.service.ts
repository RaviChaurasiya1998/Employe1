import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Alice', deptId: 'HR', position: 'Manager' },
    { id: 2, name: 'Bob', deptId: 'HR', position: 'Executive' },
    { id: 3, name: 'Charlie', deptId: 'IT', position: 'Developer' },
  ];

  getEmployeesByDept(deptId: string) {
    return this.employees.filter(emp => emp.deptId === deptId);
  }

  getEmployeeById(id: number) {
    return this.employees.find(emp => emp.id === id);
  }

  updateEmployee(updated: any) {
    const index = this.employees.findIndex(e => e.id === updated.id);
    if (index > -1) this.employees[index] = updated;
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}