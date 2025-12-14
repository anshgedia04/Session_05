import { Product, ProductResponse, Category, User } from '../types';

const BASE_URL = 'https://dummyjson.com';

export const api = {
  login: async (username: string, password: string): Promise<User> => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, expiresInMins: 60 }),
    });
    if (!res.ok) throw new Error('Invalid credentials');
    return res.json();
  },

  getProducts: async (
    limit: number,
    skip: number,
    category?: string,
    search?: string,
    sortBy?: string,
    order?: 'asc' | 'desc'
  ): Promise<ProductResponse> => {
    let url = `${BASE_URL}/products`;

    // DummyJSON API quirks: Search and Category are separate endpoints
    if (search) {
      url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}`;
    } else if (category) {
      url = `${BASE_URL}/products/category/${category}`;
    }

    // Append pagination and sorting params
    const separator = url.includes('?') ? '&' : '?';
    let params = `limit=${limit}&skip=${skip}`;
    
    if (sortBy) {
      params += `&sortBy=${sortBy}&order=${order || 'asc'}`;
    }

    const res = await fetch(`${url}${separator}${params}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  getProductById: async (id: string): Promise<Product> => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error('Product not found');
    return res.json();
  },

  getCategories: async (): Promise<Category[]> => {
    const res = await fetch(`${BASE_URL}/products/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
  },

  // Update user: accepts any partial data including password for mock purposes
  updateUser: async (id: number, data: Partial<User> & { password?: string }): Promise<User> => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update profile');
    return res.json();
  }
};