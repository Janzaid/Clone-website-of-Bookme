import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OmdbDetailsComponent } from './omdb-details/omdb-details.component';
import { OmdbSearchComponent } from './omdb-search/omdb-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: OmdbSearchComponent,
  },
  {
    path: 'movie',
    component: OmdbDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
