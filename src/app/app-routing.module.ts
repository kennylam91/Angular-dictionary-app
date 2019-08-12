import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DictionaryHomepageComponent} from './dictionary-homepage/dictionary-homepage.component';
import {DictionaryWordDetailComponent} from './dictionary-word-detail/dictionary-word-detail.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'dictionary', component: DictionaryHomepageComponent,
    children: [
      {path: ':english', component: DictionaryWordDetailComponent}]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
