import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MoviesService} from '../../services/movies.service';
import { Movies } from '../../interfaces/movies';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  input: string;
  year: string;
  Genre: string;
  public movie: Movies;
  show = false;
  constructor(
    private movie_service: MoviesService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }
  search_movies() {
    if (this.input && this.Genre) {
      this.movie_service.getMovies(this.input, this.year, this.Genre).subscribe((data) => {
      if (data.Response === 'False') {
        this.toast.error('Searched item is not found or Something went wrong', 'Not Found');
      } else {
        this.movie = data;
        this.movie_service.movieUrl.next(this.movie);
        this.show = true;
      }
    });
    } else {
      this.toast.error('Please fill the requied feild', 'Required');
    }
  }
}
