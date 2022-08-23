import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  BaseUrl = 'http://www.omdbapi.com/?apikey=7c3b4c6a';

  constructor(private http: HttpClient) {}

  searchMovie(movieName: string) {
    return this.http.get(this.BaseUrl + '&s=' + movieName);
  }

  getMovieById(id: string) {
    console.log(this.BaseUrl + '&i=' + id);
    return this.http.get(this.BaseUrl + '&i=' + id);
  }
}
