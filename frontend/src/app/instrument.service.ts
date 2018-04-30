import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Instrument } from './instrument';

@Injectable()
export class InstrumentService {

  private url = 'http://localhost:3000/api/instrument';

  constructor(private httpClient: HttpClient) { }

  getInstruments(): Observable<Instrument[]> {
    return this.httpClient.get<Instrument[]>(this.url);
  }

}
