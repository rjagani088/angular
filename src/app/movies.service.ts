import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   url = "https://moviesapis27.herokuapp.com/api/movies"
  constructor(private _http:Httpclient) { }

  getMovies():Observable<Movie[]>{
    return this._http.get<Movie[]>(this.url);
  }
}
