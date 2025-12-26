import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-brand-900 opacity-90 z-10"></div><img src="https://picsum.photos/1920/1080?blur=4" alt="Factory" className="w-full h-full object-cover"/></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-800 border border-brand-700 mb-6"><span className="text-brand-400 text-sm font-semibold uppercase">Premier OEM/ODM Manufacturer</span></div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">Wholesale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-600">Skill Game Machines</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">High-ROI, 100% Legal Skill Solutions for Distributors.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={() => navigate('/products')} className="inline-flex justify-center items-center px-8 py-4 bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold rounded-lg transition-all shadow-lg">View Catalog <ArrowRight className="ml-2 h-5 w-5"/></button>
            <button onClick={() => navigate('/contact')} className="inline-flex justify-center items-center px-8 py-4 border border-gray-600 hover:border-brand-400 text-white font-semibold rounded-lg bg-brand-800/50">Distributor Pricing</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;