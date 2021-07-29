export interface BreedsImagesApiResponse {
  message: string[];
  status: string;
}

export interface RandomImageApiResponse {
  message: string;
  status: string;
}

export interface BreedsListApiResponse {
  message: { [key: string]: string[] };
  status: string;
}
