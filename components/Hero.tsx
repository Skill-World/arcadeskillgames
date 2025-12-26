import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-900 opacity-90 z-10"></div>
        <img 
          src="https://picsum.photos/1920/1080?blur=4" 
          alt="Arcade Skill Games Factory Floor" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/10 to-transparent"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-800 border border-brand-700 mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            <span className="text-brand-400 text-sm font-semibold tracking-wide uppercase">Premier OEM/ODM Manufacturer Since 1999</span>
          </div>
          
          {/* H1 Optimized for: Wholesale, Skill Game Machines, Fish Tables */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Wholesale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-600">Skill Game Machines</span><br />
            & Fish Tables
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Direct from the factory: High-ROI, <strong>100% Legal Skill Solutions</strong> for Distributors, Routes, and Game Rooms. 
            We build custom vertical cabinets, Nudge games, and 8-player Ocean King tables that dominate the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => onNavigate('products')}
              className="inline-flex justify-center items-center px-8 py-4 bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold rounded-lg transition-all text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              View Machine Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="inline-flex justify-center items-center px-8 py-4 border border-gray-600 hover:border-brand-400 text-white hover:text-brand-400 font-semibold rounded-lg transition-all text-lg bg-brand-800/50 backdrop-blur-sm"
            >
              Distributor Pricing
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400 text-sm font-medium border-t border-brand-800 pt-8">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-500 mr-2" />
              Factory Direct Pricing
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-500 mr-2" />
              USA Market Compliant
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-500 mr-2" />
              High Retention Math
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-500 mr-2" />
              Custom Game Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;