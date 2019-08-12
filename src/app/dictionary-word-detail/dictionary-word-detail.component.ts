import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IWord} from '../dictionary-words-list/word';
import {WordService} from '../word.service';

@Component({
  selector: 'app-dictionary-word-detail',
  templateUrl: './dictionary-word-detail.component.html',
  styleUrls: ['./dictionary-word-detail.component.css']
})
export class DictionaryWordDetailComponent implements OnInit {
  sub: Subscription;
  word: IWord;

  constructor(private activatedRoute: ActivatedRoute, private wordService: WordService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const english = paraMap.get('english');
      console.log(english);
      this.word = this.wordService.search(english);
    });
  }

}
