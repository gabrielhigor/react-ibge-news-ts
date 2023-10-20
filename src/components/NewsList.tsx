import { useEffect, useState } from 'react';
import { updateImageUrlsInNews } from '../utils/imageUtils';
import { NewsItem as NewsItemType } from '../types';
import { fetchIBGENews } from '../api/ibgeNewsApi';

function NewsList() {
  const [breakingNews, setBreakingNews] = useState([] as NewsItemType[]);
  const [moreVisibleNews, setMoreVisibleNews] = useState(10);
  
  async function fetchBreakingNews() {
    const API = await fetchIBGENews();
    const data = updateImageUrlsInNews(API);
    setBreakingNews(data); 
  }

  function loadMoreNews() {
    const newVisibleNews = moreVisibleNews + 9;
    setMoreVisibleNews(newVisibleNews);
  }
  
  function addFavoriteNews(item: NewsItemType) {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    const newFavoriteNews = [...favoriteNews, item];
    localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));
    console.log('Adicionando notícia aos favoritos');
  }

  function removeFavoriteNews(item: NewsItemType) {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    const newFavoriteNews = favoriteNews.filter((news: NewsItemType) => news.id !== item.id);
    localStorage.setItem('favoriteNews', JSON.stringify(newFavoriteNews));
    console.log('Removendo notícia dos favoritos');
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
    fetchBreakingNews();
  }, []);    

  return (
    <section>
      <h3>Mais recentes</h3>
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