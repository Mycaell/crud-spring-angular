import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/component/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  constructor(
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.courses$ = this.service.list().pipe(
      catchError((error) => {
        this.openDialogError('ocorreu um erro ao carregar os cursos.');
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  readonly courses$: Observable<Course[]>;

  readonly tableCourse = {
    displayedColumns: ['name', 'category', 'actions'],
  };

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  openDialogError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message,
    });
  }
}
