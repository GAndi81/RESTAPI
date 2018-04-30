import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { UserService } from './user.service';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/api/user')
      .subscribe(users => {
        this.title = users[0].email;
      });
  }
}
