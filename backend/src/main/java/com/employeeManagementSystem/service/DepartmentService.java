package com.employeeManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employeeManagementSystem.entity.Department;
import com.employeeManagementSystem.repository.DepartmentRepository;

@Service
public class DepartmentService {

    private final DepartmentRepository repo;

    public DepartmentService(DepartmentRepository repo) {
        this.repo = repo;
    }

    public List<Department> getAll() {
        return repo.findAll();
    }

    public Department save(Department dept) {
        return repo.save(dept);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

}