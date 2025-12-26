import React from 'react';
import { CircuitBoard, Mail, Phone } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page, param?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, page: Page, param?: string) => {
    e.preventDefault();
    onNavigate(page, param);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-brand-950 pt-16 pb-8 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Keyword Silos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Core Value */}
          <div>
            <div className="flex items-center mb-6">
              <CircuitBoard className="h-8 w-8 text-brand-500" />
              <span className="ml-2 text-xl font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premier OEM/ODM manufacturer of revenue-generating skill game machines. 
              We serve master distributors and route operators with 100% compliant, high-ROI gaming solutions.
            </p>
            <div className="space-y-2">
               <div className="flex items-center text-gray-400 text-sm">
                 <Phone className="h-4 w-4 mr-2 text-brand-600" /> +1 (888) SKILL-GM
               </div>
               <div className="flex items-center text-gray-400 text-sm">
                 <Mail className="h-4 w-4 mr-2 text-brand-600" /> wholesale@skillgamex.com
               </div>
            </div>
          </div>

          {/* Column 2: Product Keywords (Silo 1) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-brand-500 pl-3">Game Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products/fish-table" onClick={(e) => handleLink(e, 'products', 'fish-table')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Wholesale Fish Tables
                </a>
              </li>
              <li>
                <a href="#products/skill-reel" onClick={(e) => handleLink(e, 'products', 'skill-reel')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Nudge & Swap Skill Games
                </a>
              </li>
              <li>
                <a href="#products/skill-arcade" onClick={(e) => handleLink(e, 'products', 'skill-arcade')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Vertical Cabinet Machines
                </a>
              </li>
              <li>
                <a href="#products/all" onClick={(e) => handleLink(e, 'products', 'all')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  IGS Compatible Game Boards
                </a>
              </li>
              <li>
                <a href="#products/all" onClick={(e) => handleLink(e, 'products', 'all')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Anti-Cheat Parts & Harnesses
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solution Keywords (Silo 2) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-blue-500 pl-3">Business Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solutions/distributors" onClick={(e) => handleLink(e, 'solutions', 'distributors')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  For Master Distributors
                </a>
              </li>
              <li>
                <a href="#solutions/gas-stations" onClick={(e) => handleLink(e, 'solutions', 'gas-stations')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Gas Station Gaming Machines
                </a>
              </li>
              <li>
                <a href="#solutions/laundromats" onClick={(e) => handleLink(e, 'solutions', 'laundromats')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Laundromat Passive Income
                </a>
              </li>
              <li>
                <a href="#solutions/game-rooms" onClick={(e) => handleLink(e, 'solutions', 'game-rooms')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Game Room Setup
                </a>
              </li>
              <li>
                <a href="#solutions/custom-venue" onClick={(e) => handleLink(e, 'solutions', 'custom-venue')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  White Label/OEM Branding
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-brand-700 pl-3">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" onClick={(e) => handleLink(e, 'contact')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Apply for Dealership
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleLink(e, 'blog')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  Compliance Blog
                </a>
              </li>
              <li>
                <a href="/" onClick={(e) => handleLink(e, 'home')} className="block text-gray-400 hover:text-brand-400 text-sm transition-colors text-left">
                  About the Factory
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Disclaimer */}
        <div className="border-t border-brand-900 pt-8 mt-8">
          <p className="text-xs text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            <strong>Legal Disclaimer:</strong> {COMPANY_NAME} manufactures skill-based amusement devices. Our products are designed for entertainment purposes only and require player interaction and skill to determine the outcome. They are not chance-based devices. Operators are solely responsible for ensuring compliance with all local, state, and federal laws regarding the operation of skill games in their specific jurisdiction (e.g., PA, GA, TX, NE). We do not offer legal advice.
          </p>
          <div className="text-center mt-4 text-xs text-gray-700">
            © {new Date().getFullYear()} {COMPANY_NAME}. Wholesale Only. Not for Home Use.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;