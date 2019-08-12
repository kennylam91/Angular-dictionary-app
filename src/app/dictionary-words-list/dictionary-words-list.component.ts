import {Component, OnInit} from '@angular/core';
import {IWord} from './word';
import {WordService} from '../word.service';

@Component({
  selector: 'app-dictionary-words-list',
  templateUrl: './dictionary-words-list.component.html',
  styleUrls: ['./dictionary-words-list.component.css']
})
export class DictionaryWordsListComponent implements OnInit {
  wordList: IWord[];

  constructor(private wordService: WordService) {
  }

  ngOnInit() {
    this.wordList = this.wordService.wordList;
  }

}
