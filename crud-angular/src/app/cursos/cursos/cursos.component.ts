import { CursoService } from '../services/curso.service';
import { Component, OnInit } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { Curso } from './../model/curso';
import { ErrorDialogComponent } from '../../shared/component/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    public dialog: MatDialog) {
    this.cursos$ = this.cursoService.listar()
    .pipe(
      catchError(error => {
        this.openDialogError('ocorreu um erro ao carregar os cursos.')
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

  readonly cursos$: Observable<Curso[]>;

  readonly tableCurso = {
    displayedColumns: [
      'id',
      'nome',
      'categoria'
    ],
  };

  openDialogError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }
}
