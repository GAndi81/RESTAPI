import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Parent } from './parent';

@Injectable()
export class ParentService {

  private url = 'http://localhost:3000/api/parent/';

  constructor(private httpClient: HttpClient) { }
  getParents(): Observable<Parent[]> {
    return this.httpClient.get<Parent[]>(this.url);

  }
}
