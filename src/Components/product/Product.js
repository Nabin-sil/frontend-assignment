import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../product/Product.css';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = () => {
    const filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setProducts(filteredProducts);
  };

  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Clear the search results if the search term is empty
    if (term === '') {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="container">
      
        <div className="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search products by name" value={searchTerm} onChange={handleSearchTermChange} />
  <button  className="btn btn-secondary" onClick={handleSearch}>Search</button>
</div>

      <div className="row mt-4">
        <div className="filter-container">
          <label htmlFor="categoryFilter">Filter by Category:</label>
          <select className="form-select small" id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div className="product-grid mt-1">
          {filteredProducts.map(product => (
            <div className="card" key={product.id}>
              <img className="card-img-top" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.category}</p>
                <p className="card-text">${product.price}</p>

                <Link to={`/product-detail/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
