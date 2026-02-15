package com.employeeManagementSystem.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeManagementSystem.entity.EmployeeEntity; 


public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}