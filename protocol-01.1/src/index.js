import React from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './menu/Menu.js';
import MyCarousel from './carousel/Carousel.js';


function App() {
  return (
    <div className="app-container">
      <div className="menu-container">
        <Menu />
      </div>
      <MyCarousel />
    </div>
  );
}

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(<App />);
}
