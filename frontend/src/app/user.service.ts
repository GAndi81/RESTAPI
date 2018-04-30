import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {
  private url = 'http://localhost:3000/api/user';
  private urldelete = 'http://localhost:3000/api/user/';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  delete(Userid): Observable<Userid[]> {
    console.log('Deleting ID: ' + Userid);
    this.httpClient.delete<Userid[]>(this.urldelete + Userid);
  }

}
