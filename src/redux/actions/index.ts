import { fetchIBGENews } from '../../api/ibgeNewsApi';
import { Dispatch, NewsItem } from '../../types';
import { updateImageUrlsInNews } from '../../utils/imageUtils';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return {
    type: REQUEST_STARTED,
  };
}

function requestSuccessful(items: NewsItem[]) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: items,
  };
}

function requestFailed() {
  return {
    type: REQUEST_FAILED,
  };
}

export function fetchItems() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const data = await fetchIBGENews();
      const update = updateImageUrlsInNews(data);
      dispatch(requestSuccessful(update));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
}
