import { Book } from 'src/app/types';

export const books: Book[] = [
  {
    id: 1001,
    title: 'Zero To One',
    authors: ['Peter Thiel', 'Blake Master'],
    price: 9.99,
    tags: ['startup', 'productivity', 'enterpreneur', 'business'],
  },
  {
    id: 1002,
    title: 'The Subtle Art Of Not Giving A F*ck',
    authors: ['Mark Manson'],
    price: 13.45,
    tags: ['selfhelp', 'motivation', 'inspiration'],
  },
  {
    id: 1003,
    title: 'The Fault In Our Stars',
    authors: ['John Green'],
    price: 10.99,
    tags: ['novel', 'cancer', 'youth', 'romantic', 'powerwill'],
  },
];

export const bookTitles = books.map((book) => ({
  id: book.id,
  title: book.title,
}));
