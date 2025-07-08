import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import {
  AudiobookPage,
  CartPage,
  FavouritesPage,
  HomePage,
  KindlePage,
  PaperPage,
} from './Pages';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="paper">
          <Route index element={<PaperPage />} />
        </Route>
        <Route path="kindle">
          <Route index element={<KindlePage />} />
        </Route>
        <Route path="audiobook">
          <Route index element={<AudiobookPage />} />
        </Route>
        <Route path="favourites">
          <Route index element={<FavouritesPage />} />
        </Route>
        <Route path="cart">
          <Route index element={<CartPage />} />
        </Route>

        <Route path="contacts" element={<CartPage />} />
        <Route path="rights" element={<CartPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
