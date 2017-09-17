import { OnInit, Component } from '@angular/core';
import { GetJokeService } from './get-joke.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  jokeContent = {
    category: '',
    joke: '',
    jokeGenerated: false
  }
  ngOnInit(){

  }
  constructor(private getJokeService: GetJokeService) {
  }
  generateJoke(event){
    this.getJokeService.getJoke(event.category).subscribe(joke => {
      this.jokeContent.category = event.category;
      this.jokeContent.joke = joke.value;
      this.jokeContent.jokeGenerated = true;
    });
  }
}
