import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[];
  location = new Location();

  constructor(private http: HttpClient,
    private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(locations => {
      this.locations = locations;
    });
  }

  delete(id) {
    this.locationService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  save(location) {
    this.locationService.save(location).subscribe(data => {
      this.ngOnInit();
    });
  }

}
