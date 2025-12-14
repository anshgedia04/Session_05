import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/authSlice';
import { toggleTheme } from '../store/themeSlice';
import { ShoppingBag, User as UserIcon, LogOut, LayoutDashboard, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { mode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-indigo-600 text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 hidden sm:block">
                ShopSphere
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Dark Mode"
            >
              {mode === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 hidden sm:flex">
                  <img 
                    src={user?.image || 'https://picsum.photos/40/40'} 
                    alt={user?.username} 
                    className="h-9 w-9 rounded-full ring-2 ring-gray-100 dark:ring-gray-700 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Welcome back,</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{user?.firstName}</span>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

                <Link to="/dashboard">
                  <Button variant="secondary" size="sm" className="flex items-center gap-2 rounded-full">
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Button>
                </Link>
                
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 border-none text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="flex items-center gap-2 rounded-full shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">
                  <UserIcon className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};