import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { Loader } from '../components/Loader';
import { Button } from '../components/ui/Button';
import { Star, ArrowLeft, ShoppingCart, Truck, ShieldCheck, Heart } from 'lucide-react';
import { clsx } from 'clsx';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => api.getProductById(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loader />;
  if (isError || !product) return <div className="text-center py-32 text-gray-500 dark:text-gray-400 font-medium">Product not found.</div>;

  const displayImage = activeImage || product.images[0] || product.thumbnail;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="group flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
      >
        <div className="p-1 rounded-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 mr-2 transition-colors">
          <ArrowLeft className="h-4 w-4" /> 
        </div>
        Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        
        {/* Left: Gallery */}
        <div className="space-y-6">
          <div className="aspect-[4/4] bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 relative group transition-colors">
            <img 
              src={displayImage} 
              alt={product.title} 
              className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105 dark:mix-blend-normal mix-blend-multiply" 
            />
             {product.discountPercentage > 0 && (
                <div className="absolute top-6 left-6 bg-rose-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-rose-200 dark:shadow-rose-900/50">
                  -{Math.round(product.discountPercentage)}%
                </div>
              )}
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={clsx(
                  "flex-shrink-0 w-20 h-20 rounded-xl border-2 overflow-hidden bg-white dark:bg-gray-800 transition-all duration-200 p-1",
                  displayImage === img 
                    ? "border-indigo-600 dark:border-indigo-500 ring-2 ring-indigo-100 dark:ring-indigo-900/30" 
                    : "border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500"
                )}
              >
                <img src={img} alt={`View ${idx}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col pt-4">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
               <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wide rounded-full">
                 {product.category}
               </span>
               <div className="flex items-center gap-1 text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-400">{product.rating}</span>
               </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="text-gray-900 dark:text-gray-200">{product.brand}</span>
              <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
              <span className={product.stock > 0 ? "text-green-600 dark:text-green-400 flex items-center gap-1" : "text-red-600 dark:text-red-400"}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 border-b border-gray-100 dark:border-gray-800 pb-10">
            {product.description}
          </p>

          <div className="mt-auto">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">${product.price}</span>
              {product.discountPercentage > 0 && (
                 <span className="text-xl text-gray-400 dark:text-gray-500 line-through font-medium">
                   ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                 </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex-1 gap-2 h-14 text-lg shadow-xl shadow-indigo-200 dark:shadow-indigo-900/30">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
              <button className="h-14 w-14 flex items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-200 dark:hover:border-rose-800 transition-all">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-colors">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <Truck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Free Delivery</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-colors">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Warranty</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">2 Year guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};