// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Events from './components/Events';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Link, Element } from 'react-scroll';

const App = () => {
  return (
    <div>
      <nav className="fixed w-full bg-primary text-white flex justify-between px-4 py-2">
        <Link to="header" smooth={true} duration={500} className="cursor-pointer">
          Home
        </Link>
        <Link to="events" smooth={true} duration={500} className="cursor-pointer">
          Events
        </Link>
        <Link to="footer" smooth={true} duration={500} className="cursor-pointer">
          Footer
        </Link>
      </nav>

      <Element name="header">
        <Header />
      </Element>

      <Element name="events">
        <Events />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
