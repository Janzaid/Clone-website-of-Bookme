import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../Services/omdb.service';

@Component({
  selector: 'app-omdb-details',
  templateUrl: './omdb-details.component.html',
  styleUrls: ['./omdb-details.component.css'],
})
export class OmdbDetailsComponent implements OnInit {
  movieID = 'tt0106062';
  movieDetail: any = {};

  constructor(private omdb: OmdbService) {}

  ngOnInit(): void {
    var a = 1;
    console.log(this.movieID);
    this.omdb.getMovieById(this.movieID).subscribe((response: any) => {
      console.log(response);
      this.movieDetail = response;
    });
  }
}
