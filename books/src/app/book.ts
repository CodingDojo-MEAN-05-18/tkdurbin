export class Book {
  // id: number;
  _id: string;
  title: string;
  author: string;
  pages: number;
  year: number;
  publisher: string;

  // constructor() {
  constructor(createId = true) {
    // if (createId) {
    // }
    // this.id = Math.round(Math.random() * 1000);
  }
}
