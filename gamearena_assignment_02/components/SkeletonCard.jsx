import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 p-5 animate-pulse flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 bg-slate-700 rounded w-3/4"></div>
        <div className="h-6 w-12 bg-slate-700 rounded-full"></div>
      </div>
      <div className="h-4 bg-slate-700 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-1/3 mb-6"></div>
      
      <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
         <div className="h-5 w-16 bg-slate-700 rounded"></div>
         <div className="h-8 w-8 bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;