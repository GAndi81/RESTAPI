import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

@Injectable()
export class LocationService {

  private url = 'http://localhost:3000/api/location';


  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.url);
  }

}
