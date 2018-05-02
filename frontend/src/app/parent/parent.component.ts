import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parents: Parent[];
  parent = new Parent();

  constructor(private http: HttpClient,
    private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.getParents().subscribe(parents => {
      this.parents = parents;
    });
  }

  delete(id) {
    this.parentService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  save(parent) {
    this.parentService.save(parent).subscribe(data => {
      this.ngOnInit();
    });
  }

}
