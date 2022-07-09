import React, { useState, useEffect } from 'react';
// TODO 6 - write component for products
// TODO - import getProducts
import {
  getProducts
} from '../api';

const Products = () => {
  // TODO - initialize state for products
  const [products, setProducts] = useState([]);
  // TODO - fetchProducts func that calls getProducts and setProducts
  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  }
  // TODO - uesEffect that calls fetchProducts
  useEffect(fetchProducts, []);
  
  return (
    <>
      <h2>Products</h2>
      {/* TODO - map over products, displaying the name, description */}
      {
        products.map(product => <div key={product.id}>
          <h1>{product.name}</h1>
        </div>)
      }
    </>
  );
}

export default Products;