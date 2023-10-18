import { newsData } from '../data/newsData';

function NewsList() {
  return (
    <section>
      <h3>Mais recentes</h3>
      <ul>
        {newsData.items.map((item) => (
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