import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HeaderComponent } from './components/header/header.component';
import {MoviesService} from './services/movies.service';
import { SearchListComponent } from './components/search-list/search-list.component';
import { HistorysComponent } from './components/historys/historys.component';
import { TimeFormat } from './pipes/convert-from24-to12-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    HeaderComponent,
    SearchListComponent,
    HistorysComponent,
    TimeFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [ MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
