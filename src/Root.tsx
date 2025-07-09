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
import { BookPage } from './Pages/BookPage/BookPage';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage';
import { RightsPage } from './Pages/RightsPage/RightsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="paperback">
          <Route index element={<PaperPage />} />
          <Route path=":bookSlug?" element={<BookPage />} />
        </Route>

        <Route path="kindle">
          <Route index element={<KindlePage />} />
          <Route path=":bookSlug?" element={<BookPage />} />
        </Route>

        <Route path="audiobook">
          <Route index element={<AudiobookPage />} />
          <Route path=":bookSlug?" element={<BookPage />} />
        </Route>

        <Route path="favourites">
          <Route index element={<FavouritesPage />} />
        </Route>

        <Route path="cart">
          <Route index element={<CartPage />} />
        </Route>

        <Route path="contacts" element={<ContactsPage />} />
        <Route path="rights" element={<RightsPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
