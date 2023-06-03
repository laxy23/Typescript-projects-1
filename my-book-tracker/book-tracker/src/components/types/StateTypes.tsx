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
