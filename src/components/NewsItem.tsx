import { newsData } from '../data/newsData';

function NewsItem() {
  return (
    <article>
      <img src={newsData.items[0].imagens} />
      <div>
        <span>Notícia mais recente</span>
        <button>💚</button>
        <h2>{newsData.items[0].titulo}</h2>
        <p>{newsData.items[0].introducao}</p>
        <time>{newsData.items[0].data_publicacao}</time>
        <a href={newsData.items[0].link}>
          <button>Leia a notícia aqui</button>
        </a>
      </div>
    </article>
  );
}

export default NewsItem;