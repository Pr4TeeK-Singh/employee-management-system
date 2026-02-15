import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://localhost:8080/departments';

  constructor(private http: HttpClient) {}

  getDepartments() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addDepartment(dept: any) {
    return this.http.post(this.baseUrl, dept);
  }

  deleteDepartment(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
