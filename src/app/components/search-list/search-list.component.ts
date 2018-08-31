import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Movies } from '../../interfaces/movies';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  msg: Movies;
  constructor(private movie_service: MoviesService) { }

  ngOnInit() {
    this.movie_service.movieUrl.subscribe(data => this.msg = data);
  }
}
