import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
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
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredbooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredbooks: IBook[];
  books: IBook[] = [];

   constructor(private bookService: BookService) {

    this.listFilter = '';

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
    this.bookService.getbooks().subscribe(
      books => {
        this.books = books;
        this.filteredbooks = this.books;
      },
      error => this.errorMessage = <any>error
    );
  }
}
