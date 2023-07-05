import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../product-detail/ProductDetail.css';
import Cart from '../cart/Cart'; // Import the Cart component
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    // Implement your logic to add the product to the cart
    console.log('Added to cart:', product);
  };

  return (
    <div className="container">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">Price: ${product.price}</p>
          <Link to='/cart' className="btn btn-primary">
                  Add to Cart
                </Link>
        </div>
      </div>
     
    </div>
  );
};

export default ProductDetail;
