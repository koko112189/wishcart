// src/presentation/components/ProductCard.tsx
import React from 'react';
import { Product } from '../../../domain/models/Product';

interface ProductCardProps {
  product: Product;
  isWished: boolean;
  onToggleWishlist: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isWished, onToggleWishlist }) => (
  <div className="product-card">
      <h1>{product.images[0]}</h1>
    <img  alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button onClick={() => onToggleWishlist(product.id)}>
      {isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  </div>
);
