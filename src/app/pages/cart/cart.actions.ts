import { Action } from '@ngrx/store';
import { Book } from 'src/app/types';

export const ADD_ITEM_INTO_CART = 'ADD_ITEM_INTO_CART';

export class AddItemIntoCart implements Action {
  readonly type = ADD_ITEM_INTO_CART;
  book: Book;
}
