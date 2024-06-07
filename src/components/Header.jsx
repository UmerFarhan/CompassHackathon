// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-center py-20 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white font-bold">Compass Circuit</h1>
      <p className="text-2xl text-white mt-4">450,000 Prize Pool</p>
      <p className="text-xl text-white mt-2">LAN Finals June 2024</p>
      <button className="mt-6 px-6 py-3 bg-secondary text-white rounded">Get Your Ticket</button>
    </header>
  );
}

export default Header;
