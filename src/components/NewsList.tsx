import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REQUEST_FAVORITES_SUCCESSFUL } from '../redux/actions';
import { NewsItem as NewsItemType, ReduxState} from '../types';

function NewsList() {
  const breakingNews = useSelector((state: ReduxState) => state.items);
  const [moreVisibleNews, setMoreVisibleNews] = useState(10);
  
  const dispatch = useDispatch();

  function loadMoreNews() {
    const newVisibleNews = moreVisibleNews + 9;
    setMoreVisibleNews(newVisibleNews);
  }
  
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

  return (
    <section>
      <ul>
        {breakingNews.slice(1, moreVisibleNews)
          .map((item) => (
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
      <button onClick={loadMoreNews} >MAIS NOTÍCIAS</button>
    </section>
  );
}

export default NewsList;
