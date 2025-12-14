import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductViewState } from '../types';

const initialState: ProductViewState = {
  searchTerm: '',
  category: '',
  sortBy: '',
  order: 'asc',
  page: 1,
  itemsPerPage: 12,
};

const productSlice = createSlice({
  name: 'productView',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.page = 1; // Reset to page 1 on search
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.searchTerm = ''; // Clear search when picking category to avoid conflict
      state.page = 1;
    },
    setSort: (state, action: PayloadAction<{ sortBy: string; order: 'asc' | 'desc' }>) => {
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFilters: (state) => {
      state.searchTerm = '';
      state.category = '';
      state.sortBy = '';
      state.order = 'asc';
      state.page = 1;
    }
  },
});

export const { setSearchTerm, setCategory, setSort, setPage, resetFilters } = productSlice.actions;
export default productSlice.reducer;
