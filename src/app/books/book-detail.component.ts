import { Component, OnInit } from '@angular/core';
import {IBook} from './book';
import { from } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'pm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Book Details';
  book: IBook;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.book = {
      'bookId': id,
      'bookName': 'House of Leaves',
      'bookAuthor': 'Mark Z. Danielewski',
      'bookCode': 'GDN-0011',
      'releaseDate': 'March 7, 2000',
      'description': '[Insert description here]',
      'price': 19.95,
      'starRating': 4.2,
      'imageUrl': 'http://t2.gstatic.com/images?q=tbn:ANd9GcSatspN_E0gHIsi3JfMPnxNM1M0yV7F1e8UyfTaxahaq9ucrUlG'
};
  }
onBack(): void {
  this.router.navigate(['/books']);
}
}
