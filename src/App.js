import './App.css';
import React, { useState } from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

import products from './product';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="card-container">
        <div className='card-grid'>
          {products.filter((product) =>
            product.city.toLowerCase().includes(searchTerm.toLowerCase()) || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.price.toString().includes(searchTerm.toString())
          ).map((product) => (
            <Card
              key={product.id}
              name={product.name}
              city={product.city}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    
    </div>
  );
}

