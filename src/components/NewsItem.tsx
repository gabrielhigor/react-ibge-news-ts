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
  
  useEffect(() => {
    fetchBreakingNews();
  }, []);    
  
  return (
    <article>
      <img src={breakingNews.imagens} />
      <div>
        <span>Notícia mais recente</span>
        <button>💚</button>
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