import { combineReducers } from 'redux';
import photos from './photos-reducer';

const combined = combineReducers({
  photos,
});

export default combined;
