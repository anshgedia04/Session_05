import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from './Icons';

const SearchBar = ({ games, onSearch, currentSearch }) => {
  const [inputValue, setInputValue] = useState(currentSearch);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  
  const wrapperRef = useRef(null);

  useEffect(() => {
    setInputValue(currentSearch);
  }, [currentSearch]);

  // Handle outside click to close suggestions
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);

    if (value.length > 0) {
      // Create unique title list for suggestions
      const filtered = games
        .filter(g => g.title.toLowerCase().includes(value.toLowerCase()))
        .map(g => g.title)
        .slice(0, 5); // Limit to top 5
      
      // Remove duplicates in suggestions
      const uniqueSuggestions = Array.from(new Set(filtered));
      
      setSuggestions(uniqueSuggestions);
      setShowSuggestions(true);
      setActiveSuggestionIndex(-1);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        handleSuggestionClick(suggestions[activeSuggestionIndex]);
        // Remove focus to hide mobile keyboard usually
        e.target.blur();
      } else {
        setShowSuggestions(false);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto z-50" ref={wrapperRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-400 transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-lg"
          placeholder="Search for a game..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue.length > 0 && setShowSuggestions(true)}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute w-full bg-slate-800 mt-2 border border-slate-700 rounded-xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`px-4 py-3 cursor-pointer text-sm text-slate-300 flex items-center transition-colors
                ${index === activeSuggestionIndex ? 'bg-indigo-600 text-white' : 'hover:bg-slate-700'}
              `}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <SearchIcon className={`w-4 h-4 mr-3 opacity-50 ${index === activeSuggestionIndex ? 'text-white' : ''}`} />
              <span className="truncate">{suggestion}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;