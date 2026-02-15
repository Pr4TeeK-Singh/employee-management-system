package com.employeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeManagementSystem.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}