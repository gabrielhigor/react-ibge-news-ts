import { FavoriteItem } from '../../types';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions';

const INITIAL_STATE: FavoriteItem[] = [];

type ActionType = {
  type: string;
  payload: FavoriteItem[];
};

const favoritesReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
  case ADD_TO_FAVORITES:
    return [...state, action.payload];
  case REMOVE_FROM_FAVORITES:
    return [...state, action.payload];
  default:
    return state;
  }
};

export default favoritesReducer;
