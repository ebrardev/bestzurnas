import {useState, useEffect} from 'react';

import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';

const App= () =>{
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get('./db.json').then((response)=>{
      setProducts(response.data.products);
  })
  .catch(error => {
    console.log('Error fetching products', error);
  });
}, [])


return (
  <div className="App">
    <Navbar />
    {products.map(product => (
      <Card key={product.id} data={product} />
    ))}
  </div>
);
};

export default App;