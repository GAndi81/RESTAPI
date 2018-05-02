import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Instrument } from './instrument';

@Injectable()
export class InstrumentService {

  private url = 'http://localhost:3000/api/instrument/';

  constructor(private httpClient: HttpClient) { }

  getInstruments(): Observable<Instrument[]> {
    return this.httpClient.get<Instrument[]>(this.url);
  }

  delete(Instrumentid): Observable<void> {
    console.log('Deleting ID: ' + Instrumentid);
    return this.httpClient.delete<void>(this.url + Instrumentid);
  }

  save(instrument: Instrument): Observable<Instrument> {
    if (instrument.id) {
      return this.httpClient.put<Instrument>(this.url + instrument.id, instrument);
    } else {
      return this.httpClient.post<Instrument>(this.url, instrument);
    }
  }

}
