import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './components/search-list/search-list.component';
import { HistorysComponent } from './components/historys/historys.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';


const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'search' , component: MovieSearchComponent},
  {path: 'search_list', component: SearchListComponent},
  {path: 'history', component: HistorysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
