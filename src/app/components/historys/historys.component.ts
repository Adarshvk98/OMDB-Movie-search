import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-historys',
  templateUrl: './historys.component.html',
  styleUrls: ['./historys.component.scss']
})
export class HistorysComponent implements OnInit {
  searchHistory = [];
  now = new Date();
  constructor(private movie_service: MoviesService) {
  }

  ngOnInit() {
   this.searchHistory = this.movie_service.searchHistory;
  }
  search_movies(movies: any) {
   this.movie_service.movieUrl.next(movies);
  }
}
