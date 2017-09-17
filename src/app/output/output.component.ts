import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  category: string;
  joke: string;
  jokeIsLoaded: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
