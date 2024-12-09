import React, { useEffect, useState } from 'react';
import { Product } from '../../../domain/models/Product';
import { useWishlist } from '../../hooks/useWishlist';
import { fetchProducts } from '../../../data/api/productApi';
import '../../../styles/SearchPage.css';

export const SearchPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [query, setQuery] = useState('');
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await fetchProducts('');
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    loadProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const searchProducts = async () => {
    try {
      const result = await fetchProducts(query);
      setProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="search-page" scrolly="true">
      <h1>Lista de Productos</h1>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className='product-title'>{product.title}</h2>
            <img src={product.images[0].replace("[", "").replace("]", "").replace('"', '')} alt={product.title} />
            <p className='product-price'>$ {product.price}</p>
            <button
              onClick={() =>
                isInWishlist(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
