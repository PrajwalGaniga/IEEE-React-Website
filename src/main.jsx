// src/main.jsx

import React, { Suspense } from 'react'; // <-- 1. Import Suspense
import ReactDOM from 'react-dom/client';
import './styles/global.css';

// 2. Import our new Loader
import { Loader } from './components/Loader/Loader';

// 3. Import App "lazily"
// This tells React to load App.jsx as a separate chunk
const App = React.lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* 4. Wrap App in Suspense */}
    {/* This shows our <Loader /> as a fallback while <App /> is loading */}
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>

  </React.StrictMode>,
);