import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetJokeService {

  constructor(private http: Http) { }

  getJoke(category) {
    if (category === 'any'){
      return this.http.get('api/random')
        .map(res => res.json());
    }else{
      return this.http.get(`api/random/${category}`)
        .map(res => res.json());
    }

  }
}
