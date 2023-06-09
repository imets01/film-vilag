import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/movies', pathMatch: 'full'},
  {path: 'home/movies', component: HomeComponent},
  {path: 'home/series', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'movie/:id', component: DetailsComponent},
  {path: 'series/:id', component: DetailsComponent},
  {path: 'series/:id/season/:index', component: DetailsComponent},
  {path: 'series/:id/season/:index/episode/:epindex', component: DetailsComponent},
  {path: 'person/:id', component: PersonComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
