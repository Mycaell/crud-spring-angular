package com.crudcourses.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudcourses.model.Course;
import com.crudcourses.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

	private final CourseRepository courseRepository;
	
	public CourseController(CourseRepository courseRepository) {
		this.courseRepository = courseRepository;
	}

	@GetMapping
	public ResponseEntity<List<Course>> getAll() {
		List<Course> courses = courseRepository.findAll();
		return new ResponseEntity<>(courses, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Course> add(@RequestBody Course course) {
		Course newCourse = courseRepository.save(course);
		return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
	}
	
}
