import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './menu/HeaderMenu';
import MyCarousel from './carousel/Carousel';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <HeaderMenu className="header-menu" />
      <div className="carousel-container">
        <MyCarousel />
      </div>
    </div>
  );
}


const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.render(<App />, root);
}
