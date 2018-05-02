import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[];
  teacher = new Teacher();

  constructor(private http: HttpClient,
    private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  delete(id) {
    this.teacherService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  save(teacher) {
    this.teacherService.save(teacher).subscribe(data => {
      this.ngOnInit();
    });
  }

}
