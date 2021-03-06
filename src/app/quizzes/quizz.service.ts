import { Injectable } from '@angular/core';
import { BaseService } from '../commons/service/base.service';
import { Quizz } from './quizz';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class QuizzService extends BaseService<Quizz> {

  resource = 'quiz';

  constructor(public http: HttpClient) {
    super(http);
  }

  get(id: number): Observable<Quizz> {
    return this.getEntity(id).pipe(map(data => {
      return new Quizz(data);
    }));
  }

  list(): Observable<Quizz[]> {
    return this.listEntity().pipe(
      map(list => list.map(item => new Quizz(item))));
  }

  listAnswer(quiz: Quizz): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.RESOURCE_ID_URL(this.resource, String(quiz.id)) + '/answer').pipe(
      map(list => list.map(item => new Answer(item))));
  }

  add(quiz: Quizz): Observable<Quizz> {
    return this.addEntity(quiz).pipe(map(data => {
      return new Quizz(data);
    }));
  }

  update(quiz: Quizz): Observable<Quizz> {
    return this.updateEntity(quiz).pipe(map(data => {
      return new Quizz(data);
    }));
  }

  delete(id: number): Observable<Quizz> {
    return this.getEntity(id).pipe(map(data => {
      return new Quizz(data);
    }));
  }

}
