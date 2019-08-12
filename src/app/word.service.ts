import {Injectable} from '@angular/core';
import {IWord} from './dictionary-words-list/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  // tslint:disable-next-line:variable-name
  private _wordList: IWord[] = [
    {english: 'hello', vietnamese: 'xin chào'},
    {english: 'good morning', vietnamese: 'chào buổi sáng'},
    {english: 'good afternoon', vietnamese: 'chào buổi trưa'},
    {english: 'good evening', vietnamese: 'chào buổi tối'},
    {english: 'good night', vietnamese: 'chúc ngủ ngon'},
    {english: 'father', vietnamese: 'bố'},
    {english: 'mother', vietnamese: 'mẹ'},
    {english: 'brother', vietnamese: 'anh em'},
    {english: 'sister', vietnamese: 'chị em'},
    {english: 'go', vietnamese: 'đi'},
    {english: 'come', vietnamese: 'đến'},

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

  filter(value: string): IWord[] {
    return this.wordList.filter(word => word.english.indexOf(value) !== -1);
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
