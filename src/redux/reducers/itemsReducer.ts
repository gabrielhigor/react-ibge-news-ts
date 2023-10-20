import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';
import { NewsItem } from '../../types';

const INITIAL_STATE: NewsItem[] = [];

type ActionType = {
  type: string;
  payload: NewsItem[];
};

const itemsReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
  case REQUEST_STARTED:
    return state;
  case REQUEST_SUCCESSFUL:
    return action.payload;
  case REQUEST_FAILED:
    return state;
  default:
    return state;
  }
};

export default itemsReducer;
