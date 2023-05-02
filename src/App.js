import {useState, useEffect} from 'react';

import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import products from './product'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <div className='card-grid'>
      {products.map(product =>(
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