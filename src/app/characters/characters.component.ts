import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private req: RequestService) { }
  results
  ngOnInit(): void {
    this.req.characters().toPromise().then((res) => {
      this.results = res.data.results
    })
  }

}
