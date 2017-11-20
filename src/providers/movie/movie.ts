import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatesMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=83a808b2cd6a55b6257ac5868752fc4c");
  }

  getMoviesDetails(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=83a808b2cd6a55b6257ac5868752fc4c`);
  }
}
