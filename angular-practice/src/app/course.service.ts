import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private MessagesService: MessagesService) { }

  getCourses(): Observable<Course[]> {
    //TODO: Send the message _after_ fetching the heroes.
    this.MessagesService.add('CourseService: fetched courses')
    return of (COURSES);
  }
}
