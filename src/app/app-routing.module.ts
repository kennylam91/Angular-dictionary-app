import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DictionaryHomepageComponent} from './dictionary-homepage/dictionary-homepage.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dictionary-home', component: DictionaryHomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
