import { Book } from '.';

export default interface Cart {
  addedBooks: Book[];
  displayDialog: boolean;
}
