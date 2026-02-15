package com.employeeManagementSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employeeManagementSystem.entity.EmployeeEntity;
import com.employeeManagementSystem.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeServiceImpl(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public EmployeeEntity saveEmployee(EmployeeEntity employee) {
        System.out.println("in service saveEmployee");
        return repository.save(employee);
    }

    @Override
    public List<EmployeeEntity> getAllEmployees() {
        return repository.findAll();
    }

    @Override
    public EmployeeEntity getEmployeeById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public EmployeeEntity updateEmployee(Long id, EmployeeEntity employee) {

        return repository.save(employee);
    }

    @Override
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
