import { Book } from '../book';

export const BOOKS: Book[] = [
  /*{
    id: randomId(),
    title: 'Stranger in a Strange Land',
    author: 'Rober Heinlein',
    publisher: 'Punams Sons',
    year: 1961,
    pages: 408,
  },

  {
    id: randomId(),
    title: 'Where the Red Fern Grows',
    author: 'Wilson Rawls',
    publisher: 'Doubleday',
    year: 1961,
    pages: 245,
  },
  {
    id: randomId(),
    title: 'A Fire Upon the Deep',
    author: 'Vernor Vinge',
    publisher: 'Tor Books',
    year: 1992,
    pages: 391,
  },*/
];

function randomId() {
  return Math.round(Math.random() * 1000);
}
