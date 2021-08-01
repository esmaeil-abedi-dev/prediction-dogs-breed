import { Urls } from '../redux/constants/types';

export interface SingleResultObject {
  id: string;
  likes: number;
  location: { title: string; name: string; country: string };
  user: { id: string; first_name: string };
  urls: Urls;
}

export interface SearchPhotosApiResponse {
  total: number;
  total_pages: number;
  results: SingleResultObject[];
}

export interface PhotoApiResponse {
  id: string;
  downloads: number;
  likes: number;
  location: { title: string; name: string; country: string };
  user: { id: string; first_name: string };
  urls: Urls;
}
