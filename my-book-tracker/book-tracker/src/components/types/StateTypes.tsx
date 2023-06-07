export interface AppState {
  user: null | userData;
  books: null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
export interface userData {
  name?: string;
  email: string;
  password: string;
}

export interface BookState {
  myBooks: null | bookData[];
  book: null | bookData;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

export interface bookData {
  _id: string;
  author: string;
  title: string;
  isbn: number;
  pages: number;
  type: string;
  description: string;
  image: any;
}
