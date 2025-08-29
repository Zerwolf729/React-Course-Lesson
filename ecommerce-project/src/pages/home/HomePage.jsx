import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import ProductsGrid from "./ProductsGrid";
import Header from "../../components/Header";
import "./HomePage.css";

const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>

      <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          <ProductsGrid products={products} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
