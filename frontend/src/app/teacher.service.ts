import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher';

@Injectable()
export class TeacherService {
  private url = 'http://localhost:3000/api/teacher/';

  constructor(private httpClient: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.url);

  }

  delete(Teacherid): Observable<void> {
    console.log('Deleting ID: ' + Teacherid);
    return this.httpClient.delete<void>(this.url + Teacherid);
  }

  save(teacher: Teacher): Observable<Teacher> {
    if (teacher.id) {
      return this.httpClient.put<Teacher>(this.url + teacher.id, teacher);
    } else {
      return this.httpClient.post<Teacher>(this.url, teacher);
    }
  }
}
