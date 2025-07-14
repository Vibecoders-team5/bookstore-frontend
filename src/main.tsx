import { createRoot } from 'react-dom/client';
import './main.css';
import './i18n';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);
