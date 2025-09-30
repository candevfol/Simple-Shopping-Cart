import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product';

const Home = () => {
  
  const [products, setProducts] = useState([]);
  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [])
  return (
    <div className='product-container'>
      {products.length>0?(
        products.map((product) => (
         <Product key={product.id} product={product} />
        ))
      ): <>Loading...</>}
    </div>
  )
}

export default Home