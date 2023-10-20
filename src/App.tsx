import Home from './pages/Home';
import NewsList from './components/NewsList';
import NewsFavorites from './components/NewsFavorites';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Home />
      <div>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/favorites" element={<NewsFavorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
