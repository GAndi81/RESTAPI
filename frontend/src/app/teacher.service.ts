import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher';

@Injectable()
export class TeacherService {
  private url = 'http://localhost:3000/api/teacher';

  constructor(private httpClient: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.url);

  }
}
