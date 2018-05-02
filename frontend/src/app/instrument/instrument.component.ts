import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

  instruments: Instrument[];
  instrument = new Instrument();

  constructor(private http: HttpClient,
    private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.instrumentService.getInstruments().subscribe(instruments => {
      this.instruments = instruments;
    });
  }

  delete(id) {
    this.instrumentService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  save(instrument) {
    this.instrumentService.save(instrument).subscribe(data => {
      this.ngOnInit();
    });
  }

}
