import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css'],
})
export class BookdetailComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  ngOnInit() {}
}
