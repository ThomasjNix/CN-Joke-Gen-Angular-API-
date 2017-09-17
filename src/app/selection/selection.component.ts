import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  categories: any = ['any'];

  @Output() jokeSubmission = new EventEmitter<{category: string}>();
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(categories => {
      for (let category of categories){
        this.categories.push(category);
      }
    });
  }

  submitJokeRequest(event){
    this.jokeSubmission.emit({category: this.categories[0]});
  }

}
