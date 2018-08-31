import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movieUrl: Subject<any> = new ReplaySubject<any>();
  public searchHistory = [];
  private _url = 'http://www.omdbapi.com/?apikey=68ee092e';
  constructor(private http: Http) {
    this.pushMovies();
   }

  getMovies(title: string, year: string, Genre?: string) {
    if (Genre === '') {
      return this.http.get(this._url + '&t=' + title + '&y=' + year + '&plot=full').pipe(
        map(res => res.json())
      );
    } else {
      return this.http.get(this._url + '&t=' + title + '&y=' + year + '&plot=full' + '&type=' + Genre).pipe(
        map(res => res.json())
      );
    }
  }

  pushMovies() {
    this.movieUrl.subscribe(movies => {
      movies.TimeOfSearch = new Date();
      this.searchHistory.push(movies);
    });
  }

}
