import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private req: RequestService) { }
  results
  ngOnInit(): void {
    this.req.comics().toPromise().then((res) => {
      this.results = res.data.results
    })
  }
}
