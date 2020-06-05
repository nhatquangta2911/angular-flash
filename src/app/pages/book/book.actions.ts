import { Action } from '@ngrx/store';
import { Book } from 'src/app/types';

export const ADD_BOOK = 'ADD_BOOK';
export class AddBook implements Action {
  readonly type = ADD_BOOK;
  book: Book;
}
