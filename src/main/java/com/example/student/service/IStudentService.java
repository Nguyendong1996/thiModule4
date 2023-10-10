package com.example.student.service;

import com.example.student.model.Student;

import java.util.List;

public interface IStudentService extends IGenerateService<Student>{
    List<Student> SearchByName(String name);
}
