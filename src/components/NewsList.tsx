import { useEffect, useState } from 'react';
import { updateImageUrlsInNews } from '../utils/imageUtils';
import { NewsItem as NewsItemType } from '../types';
import { fetchIBGENews } from '../api/ibgeNewsApi';

function NewsList() {
  const [breakingNews, setBreakingNews] = useState([] as NewsItemType[]);
  
  async function fetchBreakingNews() {
    const API = await fetchIBGENews();
    const data = updateImageUrlsInNews(API);
    setBreakingNews(data); 
  }

  useEffect(() => {
    fetchBreakingNews();
  }, []);    

  return (
    <section>
      <h3>Mais recentes</h3>
      <ul>
        {breakingNews.slice(1, 10)
          .map((item) => (
            <li key={item.id}>
              <h2>{item.titulo}</h2>
              <p>{item.introducao}</p>
              <time>{item.data_publicacao}</time>
              <a href={item.link}>
                <button>Leia a notícia aqui</button>
              </a>
              <button>💚</button>
            </li>
          ))}
      </ul>
      <button>MAIS NOTÍCIAS</button>
    </section>
  );
}


export default NewsList;