import React, { useState, useEffect, useMemo } from 'react';
import { fetchGames } from './services/gameService';
import GameCard from './components/GameCard';
import SkeletonCard from './components/SkeletonCard';
import SearchBar from './components/SearchBar';
import { SortIcon, GamepadIcon, SearchIcon } from './components/Icons';

const App = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [platformSort, setPlatformSort] = useState(null);

  // Fetch Data on Mount
  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        // Simulate a small delay for the skeleton demo if the API is too fast
        // await new Promise(resolve => setTimeout(resolve, 1000)); 
        const data = await fetchGames();
        setGames(data);
      } catch (err) {
        setError("Failed to load games data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  // Compute derived state for filtered/sorted games
  const processedGames = useMemo(() => {
    // 1. Filter by Search
    let result = games;
    if (searchTerm.trim() !== "") {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(game => 
        game.title.toLowerCase().includes(lowerTerm)
      );
    }

    // 2. Sort by Platform
    if (platformSort) {
      result = [...result].sort((a, b) => {
        if (platformSort === 'asc') {
          return a.platform.localeCompare(b.platform);
        } else {
          return b.platform.localeCompare(a.platform);
        }
      });
    }

    return result;
  }, [games, searchTerm, platformSort]);

  const toggleSort = () => {
    if (platformSort === null) setPlatformSort('asc');
    else if (platformSort === 'asc') setPlatformSort('desc');
    else setPlatformSort(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Header Section */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 shadow-sm transition-all">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => {setSearchTerm(''); setPlatformSort(null);}}>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <GamepadIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                GameArena
              </h1>
            </div>

            {/* Search Bar Component */}
            <div className="w-full md:w-1/2">
              <SearchBar 
                games={games} 
                onSearch={setSearchTerm} 
                currentSearch={searchTerm} 
              />
            </div>

            {/* Platform Sort Control */}
             <button 
                onClick={toggleSort}
                className={`flex items-center justify-center space-x-2 px-5 py-3 rounded-xl border font-medium transition-all duration-200 active:scale-95 w-full md:w-auto
                  ${platformSort 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750 hover:text-white hover:border-slate-600'}
                `}
                aria-label="Sort by Platform"
              >
                <SortIcon className="w-5 h-5" />
                <span>
                  {platformSort === 'asc' ? 'Platform (A-Z)' : 
                   platformSort === 'desc' ? 'Platform (Z-A)' : 
                   'Sort Platform'}
                </span>
              </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Stats Row */}
        {!loading && !error && (
           <div className="mb-6 flex items-center justify-between text-sm text-slate-500">
             <p>Showing <span className="text-indigo-400 font-bold">{processedGames.length}</span> results</p>
             {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="hover:text-red-400 transition-colors"
                >
                  Clear Search
                </button>
             )}
           </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-red-500/10 p-4 rounded-full mb-4">
              <span className="text-4xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-200 mb-2">Oops! Something went wrong</h2>
            <p className="text-slate-400 max-w-md mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && processedGames.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
            <div className="bg-slate-800 p-6 rounded-full mb-4 shadow-xl border border-slate-700">
               <SearchIcon className="w-12 h-12 text-slate-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-200 mb-2">No games found</h2>
            <p className="text-slate-400">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Loading Skeletons */}
          {loading && Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

          {/* Game Cards */}
          {!loading && processedGames.map((game, index) => (
            <div key={`${game.title}-${game.platform}-${index}`} className="animate-in zoom-in-95 duration-300 fill-mode-both" style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </main>

       {/* Simple Footer */}
       <footer className="border-t border-slate-800 bg-slate-900 mt-auto py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} GameArena. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;