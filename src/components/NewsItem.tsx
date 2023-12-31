import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REQUEST_FAVORITES_SUCCESSFUL } from '../redux/actions';
import { NewsItem as NewsItemType, ReduxState } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';

function NewsItem() {
  const breakingNews = useSelector((state: ReduxState) => state.items);
  
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
  
  return (
    <>
      {breakingNews.length === 0 ? (
        <Loading />
      ) : (
        breakingNews.slice(0, 1)
          .map((item) => (
            <article key={item.id}>
              <img src={item.imagens} />
              <div>
                <span>Notícia mais recente</span>
                <button onClick={() => heartFavoriteNews(item)}>💚</button>
                <h2>{item.titulo}</h2>
                <p>{item.introducao}</p>
                <time>{item.data_publicacao}</time>
                <a href={item.link}>
                  <button>Leia a notícia aqui</button>
                </a>
              </div>
            </article>
          ))
      )}
    </>
  );
}

export default NewsItem;
