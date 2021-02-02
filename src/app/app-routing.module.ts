import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-search/:searchmovie', component: MovieSearchComponent },
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
