import React from 'react';
import { useWishlist } from '../../hooks/useWishlist';
import '../../../styles/SearchPage.css';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="search-page">
      <h1>Favoritos</h1>
      {wishlist.length === 0 ? (
        <p>Tu lista de favoritos está vacía.</p>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="product-card">
              <h2 className='product-title'>{product.title}</h2>
              <img src={product.images[0].replace("[", "").replace("]", "").replace('"', '')} alt={product.title} />
              <p className='product-price'>$ {product.price}</p>
              <button onClick={() => removeFromWishlist(product.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
