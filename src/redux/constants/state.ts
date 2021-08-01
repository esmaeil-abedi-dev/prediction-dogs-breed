import { PhotosInitialState } from './types';

export interface IApplicationState {
  photos: PhotosInitialState;
}

export type AppAction<TAction> = (
  dispatch: (action: TAction) => void,
  getState: () => IApplicationState,
) => void;
