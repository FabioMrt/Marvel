import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private req: RequestService) { }
  results
  ngOnInit(): void {
    this.req.events().toPromise().then((res) => {
      this.results = res.data.results
    })
  }

}
