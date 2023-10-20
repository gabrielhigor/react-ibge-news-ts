import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems } from '../redux/actions';
import { AnyAction } from 'redux';

import Header from '../components/Header';
import NewsItem from '../components/NewsItem';
import NewsList from '../components/NewsList';
import NewsFavorites from '../components/NewsFavorites';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems() as unknown as AnyAction);
  }, []);

  return (
    <>
      <Header />
      <NewsItem />
      <NewsList />
      <NewsFavorites />
    </>
  );
}

export default Home;
