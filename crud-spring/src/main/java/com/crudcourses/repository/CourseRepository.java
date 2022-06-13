package com.crudcourses.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudcourses.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
