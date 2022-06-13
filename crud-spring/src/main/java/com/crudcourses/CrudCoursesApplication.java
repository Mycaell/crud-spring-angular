package com.crudcourses;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.crudcourses.model.Course;
import com.crudcourses.repository.CourseRepository;

@SpringBootApplication
public class CrudCoursesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudCoursesApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular com Spring");
			c.setCategory("front-end");

			courseRepository.save(c);
		};
	}

}
