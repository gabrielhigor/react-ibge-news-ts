import { FavoriteItem } from '../../types';
import { 
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES, 
  REQUEST_FAVORITES_FAILED,
  REQUEST_FAVORITES_STARTED,
  REQUEST_FAVORITES_SUCCESSFUL 
} from '../actions';

const INITIAL_STATE: FavoriteItem[] = [];

type ActionType = {
  type: string;
  payload: FavoriteItem;
};

const favoritesReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
  case ADD_TO_FAVORITES:
    return [...state, action.payload];
  case REMOVE_FROM_FAVORITES:
    return state.filter((item) => item.id !== action.payload.id);
  case REQUEST_FAVORITES_STARTED:
    return state;
  case REQUEST_FAVORITES_SUCCESSFUL:
    return action.payload;
  case REQUEST_FAVORITES_FAILED:
    return state;
  default:
    return state;
  }
};

export default favoritesReducer;
