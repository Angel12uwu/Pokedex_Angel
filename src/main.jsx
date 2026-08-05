import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react-router'

const CLERK_PUBLISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const BASE = import.meta.env.BASE_URL || '/';
const toPath = (url) => {
    try {
        const u = new URL(url, 'http://localhost');
        return u.pathname;
    } catch {
        return url;
    }
};
const BASENAME = toPath(BASE).replace(/\/+$/, '') || '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={BASENAME}>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
