import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  private readonly API: string = '/api/courses';

  list() {
    return this.httpClient.get<Course[]>(this.API);
  }

  save(course: Course) {
    return this.httpClient.post<Course>(this.API, course);
  }
}
