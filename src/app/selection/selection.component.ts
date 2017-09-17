import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  categories: any = ['any'];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    console.log(this.categoriesService.getCategories());
    this.categoriesService.getCategories().subscribe(categories => {
      for (let category of categories){
        this.categories.push(category);
      }
    });
  }

}
