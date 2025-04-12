export type BookType = {
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

export type BooksResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BookType[];
};

export type CategoryFromSubjectsData = {
  title: string;
  subjects: string[];
  description: string;
};

export type CategoryFromBookshelfData = {
  title: string;
  bookshelf: string[];
  description: string;
};
