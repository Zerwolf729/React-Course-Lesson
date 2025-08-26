import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductsGrid from './ProductsGrid';
import Header from '../../components/Header'
import './HomePage.css'

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }
    
    getHomeData();
  }, [])
  return (
    <>
      <title>Ecommerce Project</title>

      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          <ProductsGrid products={products} />
        </div>
      </div>
    </>
  )
}

export default HomePage