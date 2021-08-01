export interface User {
  id: string;
  name: string;
}
export interface Urls {
  full: string;
  thumb: string;
}

export interface Photo {
  id: string;
  downloads?: number;
  likes: number;
  location?: string;
  user: User;
  urls: Urls;
}

export interface Action<P = any> {
  type: string;
  payload?: P;
}

export interface PhotosInitialState {
  photoList: Photo[];
  favoriteList: Photo[];
  searchQuery: string;
}
