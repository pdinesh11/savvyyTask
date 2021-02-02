import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: any = [];
  categories = [];  
  constructor(private movieServiceService: MovieServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.movieServiceService.getMovieList().subscribe(res => {
      const movieList = res['movies'];
      let allGenres = [];
      if (res['movies'] && movieList.length > 0) {
        allGenres = [].concat.apply([], movieList.map(({ genres }) => genres))
          .sort((a, b) => a.localeCompare(b))
          .reduce((acc, genres) => {
            let i = acc.length - 1
            let prev = acc[i];
            if (prev && prev.label == genres) {
              acc[i].count++;
            } else {
              acc = [...acc, { label: genres, count: 1 }];
            }
            return acc;
          }, []);
      }
      if (allGenres) {
        allGenres.forEach(x => {
          x['movieList'] = [];
          movieList.forEach(m => {
            if (m.genres.indexOf(x.label) > -1) {
              x.movieList.push(m);
            }
          });
        })
      }
      console.log(allGenres);
      this.categories = allGenres;
    })
  }
  catogoriesByGeneres(finalMovieList) {

  }
  movietitle:'';
  onUserClick(usertitle){
    this.movietitle=usertitle;
    this.router.navigate(['movie-search', this.movietitle])
  }
}
