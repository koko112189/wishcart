import axios from 'axios';
import { Product } from '../../domain/models/Product';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${API_URL}?title_like=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};
