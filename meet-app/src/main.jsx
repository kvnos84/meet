import * as atatus from 'atatus-spa';
atatus.config('25de2f8822144301983e8129314ac423').install();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
