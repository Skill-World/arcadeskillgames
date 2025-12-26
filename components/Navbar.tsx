import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CircuitBoard, ChevronDown, Fish, Dices, Joystick } from 'lucide-react';
import { COMPANY_NAME, INDUSTRY_SOLUTIONS } from '../constants';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, param?: string) => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const productTimerRef = useRef<any>(null);
  const solutionTimerRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-brand-900/50 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={closeAll} className="flex items-center group">
            <CircuitBoard className="h-8 w-8 text-brand-500 group-hover:text-brand-400 transition-colors" />
            <span className="ml-2 text-2xl font-bold text-white tracking-tight group-hover:text-brand-100 transition-colors">{COMPANY_NAME}</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-bold uppercase tracking-wide transition-colors ${isActive('/') ? 'text-brand-400' : 'text-gray-300 hover:text-white'}`}>Home</Link>

            {/* Products Dropdown */}
            <div className="relative group" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <Link to="/products" className={`flex items-center text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer ${isActive('/products') ? 'text-brand-400' : 'text-gray-300 hover:text-white'}`}>
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {isProductsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-brand-800 border border-brand-700 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                  <div className="p-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 py-3 border-b border-brand-700 mb-2">Categories</div>
                    <Link to="/products/skill-reel" onClick={closeAll} className="w-full flex items-center p-3 rounded-lg hover:bg-brand-700 text-left transition-colors"><Dices className="h-5 w-5 mr-3 text-brand-500"/><span className="text-white font-bold text-sm">Skill Reel Games</span></Link>
                    <Link to="/products/fish-table" onClick={closeAll} className="w-full flex items-center p-3 rounded-lg hover:bg-brand-700 text-left transition-colors"><Fish className="h-5 w-5 mr-3 text-brand-500"/><span className="text-white font-bold text-sm">Fish Table Games</span></Link>
                    <Link to="/products/skill-arcade" onClick={closeAll} className="w-full flex items-center p-3 rounded-lg hover:bg-brand-700 text-left transition-colors"><Joystick className="h-5 w-5 mr-3 text-brand-500"/><span className="text-white font-bold text-sm">Skill Arcade Games</span></Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/solutions" className={`text-sm font-bold uppercase tracking-wide transition-colors ${isActive('/solutions') ? 'text-brand-400' : 'text-gray-300 hover:text-white'}`}>Solutions</Link>
            <Link to="/blog" className={`text-sm font-bold uppercase tracking-wide transition-colors ${isActive('/blog') ? 'text-brand-400' : 'text-gray-300 hover:text-white'}`}>Blog</Link>
            <Link to="/contact" className="bg-brand-500 hover:bg-brand-400 text-brand-900 px-6 py-2 rounded-full font-bold transition-all shadow-lg">Contact</Link>
          </div>
          <div className="lg:hidden"><button onClick={() => setIsOpen(!isOpen)} className="text-gray-300"><Menu/></button></div>
        </div>
      </div>
      {isOpen && (
         <div className="lg:hidden bg-brand-800 absolute w-full border-t border-brand-700 shadow-xl pb-20 px-4 pt-8 space-y-4">
            <Link to="/" onClick={closeAll} className="block text-xl font-bold text-gray-300">Home</Link>
            <Link to="/products" onClick={closeAll} className="block text-xl font-bold text-gray-300">Products</Link>
            <Link to="/solutions" onClick={closeAll} className="block text-xl font-bold text-gray-300">Solutions</Link>
            <Link to="/contact" onClick={closeAll} className="block text-center text-xl font-bold bg-brand-500 text-brand-900 rounded-lg py-4">Contact</Link>
         </div>
      )}
    </nav>
  );
};
export default Navbar;