import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, CircuitBoard, ChevronDown, Gamepad2, Fish, Dices, Joystick, Phone } from 'lucide-react';
import { COMPANY_NAME, INDUSTRY_SOLUTIONS } from '../constants';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, param?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const productTimerRef = useRef<NodeJS.Timeout | null>(null);
  const solutionTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, page: Page, param: string = 'all') => {
    e.preventDefault();
    onNavigate(page, param);
    setIsOpen(false);
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    window.scrollTo(0, 0);
  };

  // Product Dropdown Handlers
  const handleProductEnter = () => {
    if (productTimerRef.current) clearTimeout(productTimerRef.current);
    setIsProductsOpen(true);
    setIsSolutionsOpen(false);
  };

  const handleProductLeave = () => {
    productTimerRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  // Solution Dropdown Handlers
  const handleSolutionEnter = () => {
    if (solutionTimerRef.current) clearTimeout(solutionTimerRef.current);
    setIsSolutionsOpen(true);
    setIsProductsOpen(false);
  };

  const handleSolutionLeave = () => {
    solutionTimerRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 200);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-brand-900/50 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" onClick={(e) => handleNav(e, 'home')} className="flex items-center group">
            <CircuitBoard className="h-8 w-8 text-brand-500 group-hover:text-brand-400 transition-colors" />
            <span className="ml-2 text-2xl font-bold text-white tracking-tight group-hover:text-brand-100 transition-colors">{COMPANY_NAME}</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              onClick={(e) => handleNav(e, 'home')}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${currentPage === 'home' ? 'text-brand-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <a
                href="#products"
                onClick={(e) => handleNav(e, 'products')}
                className={`flex items-center text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer ${
                  currentPage === 'products' ? 'text-brand-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-brand-800 border border-brand-700 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                  <div className="p-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 py-3 border-b border-brand-700 mb-2">
                      Gameplay Categories
                    </div>

                    <a href="#products/skill-reel" onClick={(e) => handleNav(e, 'products', 'skill-reel')} className="w-full flex items-center p-3 rounded-lg hover:bg-brand-700 text-left group/item transition-colors">
                      <div className="bg-brand-900 p-2 rounded-lg mr-3 text-brand-500 border border-brand-700">
                         <Dices className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Skill Reel Games</div>
                      </div>
                    </a>

                    <a href="#products/fish-table" onClick={(e) => handleNav(e, 'products', 'fish-table')} className="w-full flex items-center p-3 rounded-lg hover:bg-brand-700 text-left group/item transition-colors">
                      <div className="bg-brand-900 p-2 rounded-lg mr-3 text-brand-500 border border-brand-700">
                         <Fish className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Fish Table Games</div>
                      </div>
                    </a>

                    <a href="#products/skill-arcade" onClick={(e) => handleNav(e, 'products', 'skill-arcade')} className="w-full flex items-center p-3 rounded-lg hover:bg-brand-700 text-left group/item transition-colors">
                      <div className="bg-brand-900 p-2 rounded-lg mr-3 text-brand-500 border border-brand-700">
                         <Joystick className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Skill Arcade Games</div>
                      </div>
                    </a>
                    
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleSolutionEnter}
              onMouseLeave={handleSolutionLeave}
            >
              <a
                href="#solutions"
                onClick={(e) => handleNav(e, 'solutions')}
                className={`flex items-center text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer ${
                  currentPage === 'solutions' ? 'text-brand-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </a>

              {isSolutionsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-brand-800 border border-brand-700 rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                  <div className="p-4">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 pb-2 border-b border-brand-700 mb-2">
                      Target Customers & Venues
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {INDUSTRY_SOLUTIONS.map((solution) => (
                        <a 
                          key={solution.id}
                          href={`#solutions/${solution.id}`}
                          onClick={(e) => handleNav(e, 'solutions', solution.id)} 
                          className="flex items-center p-2 rounded-lg hover:bg-brand-700 text-left group/item transition-colors"
                        >
                          <div className="bg-brand-900 p-1.5 rounded-md mr-3 text-brand-500 border border-brand-700">
                             <solution.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-xs">{solution.title}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                  </div>
                </div>
              )}
            </div>

            <a href="#blog" onClick={(e) => handleNav(e, 'blog')} className={`text-sm font-bold uppercase tracking-wide transition-colors ${currentPage === 'blog' ? 'text-brand-400' : 'text-gray-300 hover:text-white'}`}>Industry Blog</a>
            
            <a
              href="#contact"
              onClick={(e) => handleNav(e, 'contact')}
              className="bg-brand-500 hover:bg-brand-400 text-brand-900 px-6 py-2 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center"
            >
              Contact
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-800 absolute w-full border-t border-brand-700 shadow-xl h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-8 pb-3 space-y-2">
            <a href="/" onClick={(e) => handleNav(e, 'home')} className="block w-full text-left px-3 py-4 text-xl font-bold text-gray-300 border-b border-brand-700">Home</a>
            
            <div className="pt-4 pb-2 px-3">
              <div className="text-brand-500 text-xs font-bold uppercase tracking-wider mb-2">Gameplay Categories</div>
              <a href="#products/skill-reel" onClick={(e) => handleNav(e, 'products', 'skill-reel')} className="block w-full text-left pl-4 py-3 text-lg text-gray-300 hover:text-white border-l border-brand-700 hover:border-brand-500">Skill Reel Games</a>
              <a href="#products/fish-table" onClick={(e) => handleNav(e, 'products', 'fish-table')} className="block w-full text-left pl-4 py-3 text-lg text-gray-300 hover:text-white border-l border-brand-700 hover:border-brand-500">Fish Tables</a>
              <a href="#products/skill-arcade" onClick={(e) => handleNav(e, 'products', 'skill-arcade')} className="block w-full text-left pl-4 py-3 text-lg text-gray-300 hover:text-white border-l border-brand-700 hover:border-brand-500">Skill Arcade Games</a>
            </div>

            <div className="pt-4 pb-2 px-3 border-t border-brand-700 mt-2">
              <div className="text-brand-500 text-xs font-bold uppercase tracking-wider mb-2 mt-4">Target Markets</div>
              {INDUSTRY_SOLUTIONS.map((solution) => (
                 <a key={solution.id} href={`#solutions/${solution.id}`} onClick={(e) => handleNav(e, 'solutions', solution.id)} className="block w-full text-left pl-4 py-3 text-sm text-gray-300 hover:text-white border-l border-brand-700 hover:border-brand-500">
                   {solution.title}
                 </a>
              ))}
            </div>

            <a href="#blog" onClick={(e) => handleNav(e, 'blog')} className="block w-full text-left px-3 py-4 text-xl font-bold text-gray-300 border-t border-brand-700 mt-4">Industry Blog</a>
            <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="block w-full text-center px-3 py-4 text-xl font-bold bg-brand-500 text-brand-900 rounded-lg mt-4">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;