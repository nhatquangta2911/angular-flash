import { Book } from 'src/app/types';

export const books: Book[] = [
  {
    id: 1001,
    title: 'Zero To One',
    authors: ['Peter Thiel', 'Blake Master'],
    price: 9.99,
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg',
    tags: ['startup', 'productivity', 'enterpreneur', 'business'],
  },
  {
    id: 1002,
    title: 'Become Steve Jobs',
    authors: ['Brent Schlender', 'Rick Tetzeli'],
    price: 23.99,
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/91Bhe2UCQ6L.jpg',
    tags: ['biography', 'tech', 'life'],
  },
  {
    id: 1003,
    title: 'The Subtle Art Of Not Giving A F*ck',
    authors: ['Mark Manson'],
    price: 13.45,
    coverImage: 'https://cf.shopee.vn/file/78a7925bb892cb26ab4793a4f705d258',
    tags: ['selfhelp', 'motivation', 'inspiration'],
  },
  {
    id: 1004,
    title: 'The Fault In Our Stars',
    authors: ['John Green'],
    price: 10.99,
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/81yAo5ElQlL.jpg',
    tags: ['novel', 'cancer', 'youth', 'romantic', 'powerwill'],
  },
  {
    id: 1005,
    title: `You're a baddass`,
    authors: ['Jen Sincero'],
    price: 14.23,
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/51r5X3h8IWL._SX315_BO1,204,203,200_.jpg',
    tags: ['powerwill', 'self-help', 'motivation'],
  },
  {
    id: 1006,
    title: `The Power Of Habits`,
    authors: ['Charles Duhigg'],
    price: 20.23,
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41LG3kKouOL._SX324_BO1,204,203,200_.jpg',
    tags: ['lifestyle', 'self-help', 'motivation'],
  },
  {
    id: 1007,
    title: 'Lá Nằm Trong Lá',
    authors: ['Nguyễn Nhật Ánh'],
    price: 3.87,
    coverImage:
      'https://gacsach.com/sites/gacsach.com/files/styles/book310/public/la-nam-trong-la.jpg?itok=E_rcfgYs',
    tags: ['novel', 'childhood', 'student', 'friends'],
  },
];

export const bookTitles = books.map((book) => ({
  id: book.id,
  title: book.title,
}));
