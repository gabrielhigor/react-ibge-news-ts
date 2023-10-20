import { combineReducers  } from 'redux';
import itemsReducer from './itemsReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({ items: itemsReducer, favorites: favoritesReducer });

export default rootReducer;
