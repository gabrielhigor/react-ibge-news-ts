import { fetchIBGENews } from '../../api/ibgeNewsApi';
import { Dispatch, FavoriteItem, NewsItem } from '../../types';
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

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export function addToFavorites(item: FavoriteItem) {
  return {
    type: ADD_TO_FAVORITES,
    payload: item,
  };
}

export function removeFromFavorites(item: FavoriteItem) {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: item,
  };
}

export const REQUEST_FAVORITES_STARTED = 'REQUEST_FAVORITES_STARTED';
export const REQUEST_FAVORITES_SUCCESSFUL = 'REQUEST_FAVORITES_SUCCESSFUL';
export const REQUEST_FAVORITES_FAILED = 'REQUEST_FAVORITES_FAILED';

function requestFavoritesStarted() {
  return {
    type: REQUEST_FAVORITES_STARTED,
  };
}

function requestFavoritesSuccessful(favorites: FavoriteItem[]) {
  return {
    type: REQUEST_FAVORITES_SUCCESSFUL,
    payload: favorites,
  };
}

function requestFavoritesFailed() {
  return {
    type: REQUEST_FAVORITES_FAILED,
  };
}

export const getFavorites = () => {
  return (dispatch: Dispatch) => {
    try {
      dispatch(requestFavoritesStarted());
      const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
      dispatch(requestFavoritesSuccessful(favoriteNews));
    } catch (error) {
      dispatch(requestFavoritesFailed());
    }
  };
};
