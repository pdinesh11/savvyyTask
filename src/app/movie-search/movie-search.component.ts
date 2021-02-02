import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit, OnChanges {
  movie:any = {};
  searchText = '';
  constructor(private movieServiceService: MovieServiceService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllSearch();
  }
  ngOnChanges() {
    this.getAllSearch();
  }
  getAllSearch() {
    this.currentRoute.params.subscribe(param => {
      this.searchText = param['searchmovie'];
      if (param['searchmovie']) {
        this.getMovie();
      }
    });
  }
  getMovie() {
    this.movieServiceService.getMovie(this.searchText).subscribe(res => {
      const movieList = res['movies'];
      if (movieList && movieList.length > 0) {
        this.movie = movieList[0];
      }
    });
  }
}
