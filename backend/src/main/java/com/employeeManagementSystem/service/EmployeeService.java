package com.employeeManagementSystem.service;

import java.util.List;

import com.employeeManagementSystem.entity.EmployeeEntity;

public interface EmployeeService {

    EmployeeEntity saveEmployee(EmployeeEntity employee);

    List<EmployeeEntity> getAllEmployees();

    EmployeeEntity getEmployeeById(Long id);

    EmployeeEntity updateEmployee(Long id, EmployeeEntity employee);

    void deleteEmployee(Long id);
}
