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

  delete(Parentid): Observable<void> {
    console.log('Deleting ID: ' + Parentid);
    return this.httpClient.delete<void>(this.url + Parentid);
  }

  save(parent: Parent): Observable<Parent> {
    if (parent.id) {
      return this.httpClient.put<Parent>(this.url + parent.id, parent);
    } else {
      return this.httpClient.post<Parent>(this.url, parent);
    }
  }
}
