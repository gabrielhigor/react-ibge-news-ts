import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REQUEST_FAVORITES_SUCCESSFUL, getFavorites } from '../redux/actions';
import { NewsItem as NewsItemType, ReduxState } from '../types';
import { useEffect } from 'react';
import { AnyAction } from 'redux';

function NewsFavorites() {
  // Com localStorage:
  // const dataFavorites = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
  // console.log(dataFavorites);
  
  // Com Redux:
  const newsFavorites = useSelector((state: ReduxState) => state.favorites);
  // console.log(newsFavorites);

  const dispatch = useDispatch();

  function addFavoriteNews(item: NewsItemType) {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    
    dispatch({
      type: REQUEST_FAVORITES_SUCCESSFUL,
      payload: favoriteNews,
    });

    const newFavoriteNews = [...favoriteNews, item];
    localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));

    dispatch({
      type: ADD_TO_FAVORITES,
      payload: item,
    });
  }

  function removeFavoriteNews(item: NewsItemType) {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');

    dispatch({
      type: REQUEST_FAVORITES_SUCCESSFUL,
      payload: favoriteNews,
    });

    const newFavoriteNews = favoriteNews.filter((news: NewsItemType) => news.id !== item.id);
    localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));

    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: item,
    });
  }

  function heartFavoriteNews(item: NewsItemType) {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    const isFavorite = favoriteNews.find((news: NewsItemType) => news.id === item.id);
    if (isFavorite) {
      removeFavoriteNews(item);
    } else {
      addFavoriteNews(item);
    }
  }

  useEffect(() => {
    dispatch(getFavorites() as unknown as AnyAction);
  }, []);

  return (
    <section>
      <h3>Favoritas</h3>
      <ul>
        {newsFavorites.map((item: NewsItemType) => (
          <li key={item.id}>
            <h2>{item.titulo}</h2>
            <p>{item.introducao}</p>
            <time>{item.data_publicacao}</time>
            <a href={item.link}>
              <button>Leia a notícia aqui</button>
            </a>
            <button onClick={() => heartFavoriteNews(item)}>💚</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewsFavorites;
