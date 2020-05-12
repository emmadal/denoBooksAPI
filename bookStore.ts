export interface Book {
  readonly id: number;
  title: string;
  year: number;
  author: string | Array<string>;
  publisher?: string;
  page: number;
}

export const books: Array<Book> = [
  {
    id: 1,
    title: "C++ Programming Language for Beginners with Easy tips.",
    year: 2020,
    author: ["YAKOV FAIN", "ANTON MOISEEV"],
    page: 487,
  },
  {
    id: 2,
    title: "The Science of Effective Communication",
    year: 2017,
    author: "Ian Tuhovsky",
    publisher: "Amazon Digital Services LLC",
    page: 160,
  },
  {
    id: 3,
    title: "Redux in Action",
    year: 2018,
    author: ["Marc Garreau", "Will Faurot"],
    publisher: "Amazon Digital Services LLC",
    page: 330,
  },
  {
    id: 4,
    title: "C++ Programming Language for Beginners with Easy tips.",
    year: 2018,
    author: "Malini Devi",
    publisher: "Amazon Digital Services LLC",
    page: 1339,
  },
];
