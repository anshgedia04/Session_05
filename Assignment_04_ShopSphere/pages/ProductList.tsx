import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { setCategory, setPage, setSearchTerm, setSort, resetFilters } from '../store/productSlice';
import { api } from '../services/api';
import { Button } from '../components/ui/Button';
import { Loader } from '../components/Loader';
import { Search, Filter, Star, X, ShoppingCart, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../types';

export const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { searchTerm, category, sortBy, order, page, itemsPerPage } = useSelector((state: RootState) => state.productView);
  const [localSearch, setLocalSearch] = useState(searchTerm);

  // Debounce search input for UI
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== searchTerm) {
        dispatch(setSearchTerm(localSearch));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [localSearch, searchTerm, dispatch]);

  // Fetch Categories
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories,
  });

  // Fetch Products
  const skip = (page - 1) * itemsPerPage;
  const { data: productData, isLoading, isError } = useQuery({
    queryKey: ['products', { itemsPerPage, skip, category, searchTerm, sortBy, order }],
    queryFn: () => api.getProducts(itemsPerPage, skip, category, searchTerm, sortBy, order),
    placeholderData: (prev) => prev,
  });

  const totalPages = productData ? Math.ceil(productData.total / itemsPerPage) : 0;
  const isFiltered = category || searchTerm || sortBy;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Our Collection</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Discover the latest trends and bestsellers.</p>
          </div>
          
          <div className="relative group w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input 
              className="block w-full rounded-2xl border-0 bg-white dark:bg-gray-800 py-3 pl-10 pr-4 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6 transition-shadow" 
              placeholder="Search products..." 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto transition-colors">
          <div className="flex items-center gap-2 pl-2 border-r border-gray-100 dark:border-gray-700 pr-4 mr-2">
            <Filter className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Filters</span>
          </div>

          <div className="relative">
            <select 
              className="appearance-none bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-0 text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors"
              value={category}
              onChange={(e) => dispatch(setCategory(e.target.value))}
            >
              <option value="">All Categories</option>
              {categories?.map((cat: Category) => (
                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select 
              className="appearance-none bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-0 text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors"
              value={`${sortBy}-${order}`}
              onChange={(e) => {
                const [sort, ord] = e.target.value.split('-');
                if (sort === 'default') {
                    dispatch(setSort({ sortBy: '', order: 'asc' }));
                } else {
                    dispatch(setSort({ sortBy: sort, order: ord as 'asc' | 'desc' }));
                }
              }}
            >
              <option value="default-asc">Sort: Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Name: A to Z</option>
              <option value="rating-desc">Rating: Highest First</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>

          {isFiltered && (
             <button 
               onClick={() => {
                   setLocalSearch('');
                   dispatch(resetFilters());
               }}
               className="ml-auto flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 rounded-xl transition-colors"
             >
               <X className="h-4 w-4" /> Clear
             </button>
          )}
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm text-center transition-colors">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-4">
             <X className="h-8 w-8 text-red-500 dark:text-red-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Oops! Something went wrong.</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">We couldn't load the products. Please try again later.</p>
        </div>
      ) : productData?.products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm text-center transition-colors">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-full mb-4">
             <Search className="h-8 w-8 text-gray-400 dark:text-gray-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">No products found</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filters.</p>
          <Button variant="secondary" className="mt-6" onClick={() => dispatch(resetFilters())}>Clear all filters</Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {productData?.products.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/40 hover:-translate-y-1 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900/50 mb-4 transition-colors">
                  <img 
                    src={product.thumbnail} 
                    alt={product.title} 
                    className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discountPercentage > 0 && (
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-rose-600 dark:text-rose-400 shadow-sm border border-rose-100 dark:border-rose-900/50">
                      -{Math.round(product.discountPercentage)}%
                    </div>
                  )}
                  {/* Quick Action Overlay */}
                  <div className="absolute bottom-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 p-2.5 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-400 fill-current" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</span>
                      {product.discountPercentage > 0 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 line-through ml-2">
                            ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-16 gap-4">
              <button 
                disabled={page === 1}
                onClick={() => dispatch(setPage(page - 1))}
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                Page {page} / {totalPages}
              </span>
              
              <button 
                disabled={page === totalPages}
                onClick={() => dispatch(setPage(page + 1))}
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};