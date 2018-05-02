import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

@Injectable()
export class LocationService {

  private url = 'http://localhost:3000/api/location/';


  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.url);
  }

  delete(Locationid): Observable<void> {
    console.log('Deleting ID: ' + Locationid);
    return this.httpClient.delete<void>(this.url + Locationid);
  }

  save(location: Location): Observable<Location> {
    if (location.id) {
      return this.httpClient.put<Location>(this.url + location.id, location);
    } else {
      return this.httpClient.post<Location>(this.url, location);
    }
  }

}
