import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems } from './redux/actions';
import { AnyAction } from 'redux';

import Header from './components/Header';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems() as unknown as AnyAction);
  }, []);

  return (
    <>
      <Header />
      <NewsItem />
      <NewsList />
    </>
  );
}

export default App;
