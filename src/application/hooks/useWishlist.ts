import { useState, useEffect } from 'react';
import { Product } from '../../domain/models/Product';

// Clave de almacenamiento local
const WISHLIST_KEY = 'wishlist';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
  const storedWishlist = localStorage.getItem('wishlist');
  if (storedWishlist) {
    setWishlist((prev) => (prev.length === 0 ? JSON.parse(storedWishlist) : prev));
  }
}, []);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((p) => p.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((product) => product.id !== id));
  };

  const isInWishlist = (id: number): boolean => {
    return wishlist.some((product) => product.id === id);
  };

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
};
