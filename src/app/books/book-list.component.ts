import { Component, OnInit } from '@angular/core';
import { IBook } from './book';

@Component({
  selector: 'pm-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Book List';
  // tslint:disable-next-line: no-inferrable-types
  imageWidth: number = 50;
  // tslint:disable-next-line: no-inferrable-types
  imageMargin: number = 2;
  // tslint:disable-next-line: no-inferrable-types
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredbooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredbooks: IBook[];
  books: IBook[] = [

      {
        'bookId': 1,
        'bookName': 'House of Leaves',
        'bookAuthor': 'Mark Z. Danielewski',
        'bookCode': 'GDN-0011',
        'releaseDate': 'March 7, 2000',
        'description': '[Insert description here]',
        'price': 19.95,
        'starRating': 4.2,
        'imageUrl': 'http://t2.gstatic.com/images?q=tbn:ANd9GcSatspN_E0gHIsi3JfMPnxNM1M0yV7F1e8UyfTaxahaq9ucrUlG'
      }
  ];

  constructor() {
    this.filteredbooks = this.books;
    this.listFilter = 'house';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Book List' + message;
  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
      book.bookName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
