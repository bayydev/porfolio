import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
      <Analytics />
    </div>
  );
};

export default App;