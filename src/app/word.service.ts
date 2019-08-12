import {Injectable} from '@angular/core';
import {IWord} from './dictionary-words-list/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  // tslint:disable-next-line:variable-name
  private _wordList: IWord[] = [
    {english: 'hello', vietnamese: 'xin chao'},
    {english: 'good morning', vietnamese: 'chao buoi sang'},
  ];

  search(english: string): IWord {
    // tslint:disable-next-line:no-shadowed-variable
    if (!english) {
      return null;
    }
    // tslint:disable-next-line:no-shadowed-variable
    const word = this._wordList.find(word => word.english === english.toLowerCase());
    if (word) {
      return word;
    } else {
      return null;
    }
  }


  get wordList(): IWord[] {
    return this._wordList;
  }

  set wordList(value: IWord[]) {
    this._wordList = value;
  }

  constructor() {
  }
}
