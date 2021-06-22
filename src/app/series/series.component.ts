import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private req: RequestService) { }
  results
  ngOnInit(): void {
    this.req.series().toPromise().then((res) => {
      this.results = res.data.results
    })
  }

}
