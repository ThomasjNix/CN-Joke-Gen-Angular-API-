import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  categories: any = ['any'];
  selectedCategory: string = "any";

  @Output() jokeSubmission = new EventEmitter<{category: string}>();
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(categories => {
      for (let category of categories){
        this.categories.push(category);
      }
    });
  }

  setValue(event){
    this.selectedCategory = event.srcElement.selectedOptions[0].value;
  }
  submitJokeRequest(event){
    this.jokeSubmission.emit({category: this.selectedCategory});
  }

}
