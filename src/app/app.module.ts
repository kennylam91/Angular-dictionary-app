import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DictionaryHomepageComponent} from './dictionary-homepage/dictionary-homepage.component';
import {DictionaryWordDetailComponent} from './dictionary-word-detail/dictionary-word-detail.component';
import {DictionaryWordsListComponent} from './dictionary-words-list/dictionary-words-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DictionaryHomepageComponent,
    DictionaryWordDetailComponent,
    DictionaryWordsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
