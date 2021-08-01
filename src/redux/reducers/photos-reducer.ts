import * as actionTypes from '../actions/action-types';
import * as interfaces from '../constants/types';

const initialState: interfaces.PhotosInitialState = {
  photoList: [],
  favoriteList: [],
  searchQuery: 'cat',
};

const reducer = (
  state: interfaces.PhotosInitialState = initialState,
  action: interfaces.Action,
) => {
  switch (action.type) {
    case actionTypes.SEARCH_PHOTOS: {
      return { ...state, photoList: [...action.payload] };
    }
    case actionTypes.SEARCH_PHOTOS_NEXT_PAGE: {
      return { ...state, photoList: [...state.photoList, ...action.payload] };
    }
    case actionTypes.ADD_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    case actionTypes.ADD_TO_FAVORITE_LIST: {
      return {
        ...state,
        favoriteList: [...state.favoriteList, { ...action.payload }],
      };
    }
    case actionTypes.DELETE_FROM_FAVORITE_LIST: {
      const list = [...state.favoriteList];
      const selectedFavIndex = list.findIndex(
        (item: interfaces.Photo) => item.id === action.payload.id,
      );
      list.splice(selectedFavIndex, 1);
      return {
        ...state,
        favoriteList: [...list],
      };
    }
    default:
      return state;
  }
};

export default reducer;
