import { screen, within } from '@testing-library/react';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';
import App from '../App';
import NewsItem from '../components/NewsItem';
import { newsData } from '../data/newsData';

const initialState = {
  items: newsData.items,
  favorites: [],
};

describe('Teste', () => {
  test('Teste do cabeçalho', () => {
    renderWithRouterAndRedux(<App />);

    const headingElement = screen.getByRole('heading', {  name: /ibge/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('Teste Loading', async () => {
    renderWithRouterAndRedux(<NewsItem />);

    const loadingElement = screen.getByText('Carregando...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('Teste da notícia mais recente', async () => {
    const { user } = renderWithRouterAndRedux(<App />, '/', initialState);

    const newsElement = screen.getByText('Notícia mais recente');
    expect(newsElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', initialState.items[0].imagens);

    const article = screen.getByRole('article');
    const buttonFavorite = within(article).getByRole('button', {  name: /💚/i} );
    expect(buttonFavorite).toBeInTheDocument();

    await user.click(buttonFavorite);
    await user.click(buttonFavorite);
  });

  test('Teste das notícias mais recentes e as favoritas', async () => {
    const { user } = renderWithRouterAndRedux(<App />, '/', initialState);
    
    const article = screen.getByRole('article');
    const buttonFavorite = within(article).getByRole('button', {  name: /💚/i} );
    expect(buttonFavorite).toBeInTheDocument();

    await user.click(buttonFavorite);
  
    const navLinkFavorites = screen.getByRole('link', {  name: /favoritas/i});
    await user.click(navLinkFavorites);

    const buttonFavoriteRemove = within(article).getByRole('button', {  name: /💚/i} );  
    expect(buttonFavoriteRemove).toBeInTheDocument();  

    const navLinkMoreNews = screen.getByRole('link', {  name: /mais notícias/i});
    await user.click(navLinkMoreNews);

    const allList = screen.getAllByText(/leia a notícia aqui/i);
    expect(allList.length).toBe(10);
  });
});
