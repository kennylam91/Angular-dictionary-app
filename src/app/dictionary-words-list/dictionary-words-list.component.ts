import {Component, OnInit} from '@angular/core';
import {IWord} from './word';
import {WordService} from '../word.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dictionary-words-list',
  templateUrl: './dictionary-words-list.component.html',
  styleUrls: ['./dictionary-words-list.component.css']
})
export class DictionaryWordsListComponent implements OnInit {
  wordList: IWord[];
  searchForm: FormGroup;

  constructor(private wordService: WordService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.wordList = this.wordService.wordList;
    this.searchForm = this.formBuilder.group(
      {searchEnglishWord: ['']}
    );
  }

  // searchWord(word: string) {
  //   console.log(word);
  // }
  wordFilter(value: string) {
    console.log(value);
    this.wordList = this.wordService.filter(value);
    console.log(this.wordService.wordList);
  }
}
