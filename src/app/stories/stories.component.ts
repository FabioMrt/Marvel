import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor(private req: RequestService) { }
  results
  ngOnInit(): void {
    this.req.stories().toPromise().then((res) => {
      this.results = res.data.results
    })
  }

}
