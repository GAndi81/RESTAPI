import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  user = new User();

  constructor(private http: HttpClient,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  delete(id) {
    this.userService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  save(user) {
    this.userService.save(user).subscribe(data => {
      this.ngOnInit();
    });
  }
}
