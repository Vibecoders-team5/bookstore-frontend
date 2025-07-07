import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import './main.css';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);
