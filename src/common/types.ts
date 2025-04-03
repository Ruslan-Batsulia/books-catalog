export type Book = {
  id: number;
  type: null | string;
  title: string;
  description: string | null;
  downloads: number | null;
  license: string | null;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  agents: {
    id: number;
    person: string;
    type: string;
  }[];
  resources: {
    id: number;
    uri: string;
    type: string;
  }[];
};

export type BooksResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
};
