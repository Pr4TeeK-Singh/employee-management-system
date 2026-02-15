import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent implements OnInit {

  employees: any[] = [];
  departments: any[] = [];
  newDepartment: string = '';

  employee = {
    name: '',
    department: '',
    dob: '',
    state: '',
    city: '',
    mobileNo: ''
  };

  editEmployee: any = {};

  states = ['Delhi', 'Uttar Pradesh', 'Maharashtra'];

  cities: any = {
    Delhi: ['New Delhi', 'Rohini'],
    'Uttar Pradesh': ['Varanasi', 'Lucknow'],
    Maharashtra: ['Mumbai', 'Pune']
  };

  constructor(
    private service: EmployeeService,
    private deptService: DepartmentService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
  }


  loadEmployees(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.employees = data;
        this.cd.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }

  saveEmployee(form: any): void {
    if (form.invalid) return;

    this.service.save(this.employee).subscribe({
      next: () => {
        this.loadEmployees();
        form.resetForm();
      },
      error: (err) => alert(JSON.stringify(err.error))
    });
  }

  confirmDelete(id: number): void {
    if (confirm('Delete this employee?')) {
      this.service.delete(id).subscribe(() => this.loadEmployees());
    }
  }

  openEdit(emp: any): void {
    this.editEmployee = { ...emp };
    (window as any).bootstrap.Modal
      .getOrCreateInstance(document.getElementById('editModal'))
      .show();
  }

  updateEmployee(): void {
    this.service.update(this.editEmployee.id, this.editEmployee)
      .subscribe(() => {
        this.loadEmployees();
        (window as any).bootstrap.Modal
          .getInstance(document.getElementById('editModal'))
          .hide();
      });
  }

  onStateChange(): void {
    this.employee.city = '';
  }

  onEditStateChange(): void {
    this.editEmployee.city = '';
  }


  loadDepartments(): void {
    this.deptService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  addDepartment(): void {
    if (!this.newDepartment.trim()) return;

    this.deptService.addDepartment({ name: this.newDepartment })
      .subscribe(() => {
        this.newDepartment = '';
        this.loadDepartments();
      });
  }

  deleteDepartment(id: number): void {
    this.deptService.deleteDepartment(id)
      .subscribe(() => this.loadDepartments());
  }

}
