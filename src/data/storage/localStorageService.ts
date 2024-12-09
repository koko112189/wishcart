import { Product } from "../../domain/models/Product";

const WISHLIST_KEY = 'wishlist';

export const saveWishlist = (wishlist: Product[]): void => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

export const getWishlist = (): Product[] => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};
