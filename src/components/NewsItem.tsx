import { useEffect, useState } from 'react';
import { updateImageUrlsInNews } from '../utils/imageUtils';
import { NewsItem as NewsItemType } from '../types';
import { fetchIBGENews } from '../api/ibgeNewsApi';

function NewsItem() {
  const [breakingNews, setBreakingNews] = useState({} as NewsItemType);
  
  async function fetchBreakingNews() {
    const API = await fetchIBGENews();
    const data = updateImageUrlsInNews(API);
    setBreakingNews(data[0]); 
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
    <article>
      <img src={breakingNews.imagens} />
      <div>
        <span>Notícia mais recente</span>
        <button onClick={() => heartFavoriteNews(breakingNews)}>💚</button>
        <h2>{breakingNews.titulo}</h2>
        <p>{breakingNews.introducao}</p>
        <time>{breakingNews.data_publicacao}</time>
        <a href={breakingNews.link}>
          <button>Leia a notícia aqui</button>
        </a>
      </div>
    </article>
  );
}

export default NewsItem;