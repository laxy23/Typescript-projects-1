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

export interface bookData {
  author: string;
  title: string;
  isbn: number;
  pages: number;
  type: string;
  description: string;
  image: any;
}
