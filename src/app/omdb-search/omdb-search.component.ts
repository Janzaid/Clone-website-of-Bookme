import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../Services/omdb.service';

@Component({
  selector: 'app-omdb-search',
  templateUrl: './omdb-search.component.html',
  styleUrls: ['./omdb-search.component.css'],
})
export class OmdbSearchComponent {
  movieDetail: any[] = [];

  constructor(private omdb: OmdbService) {}

  searchMovie(name: string) {
    // console.log(name)
    this.omdb.searchMovie(name).subscribe((response: any) => {
      console.log(response);
      this.movieDetail = response.Search;
    });
  }
}
