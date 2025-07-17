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
  FavoritesPage,
  HomePage,
  KindlePage,
  PaperPage,
  BookPage,
  ContactsPage,
  RightsPage,
  NotFoundPage,
  NotFoundItemPage,
  CategoryPage,
} from './Pages';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage key={'home'} />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="paperback">
          <Route index element={<PaperPage />} />
          <Route path=":bookSlug" element={<BookPage />} />
        </Route>

        <Route path="kindle">
          <Route index element={<KindlePage />} />
          <Route path=":bookSlug" element={<BookPage />} />
        </Route>

        <Route path="audiobook">
          <Route index element={<AudiobookPage />} />
          <Route path=":bookSlug" element={<BookPage />} />
        </Route>

        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="404" element={<NotFoundItemPage />} />

        <Route path="category/:categorySlug">
          <Route index element={<CategoryPage />} />
        </Route>

        <Route path="contacts" element={<ContactsPage />} />
        <Route path="rights" element={<RightsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
