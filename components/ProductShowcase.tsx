import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Check, Filter, Monitor, Dices, Fish, Cpu, Joystick, Grid, Layers, ArrowRight } from 'lucide-react';
import { ProductCategory, ProductFormFactor } from '../types';

interface ProductShowcaseProps {
  initialCategory?: ProductCategory;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCategory);
  const [viewMode, setViewMode] = useState<'all' | ProductFormFactor>('all');

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
      setViewMode('all');
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'All Products', icon: Grid, seoTitle: 'Wholesale Skill Game Catalog', seoDesc: 'Browse our complete inventory of factory-direct arcade machines.' },
    { id: 'skill-reel', label: 'Skill Reel Games', icon: Dices, seoTitle: 'Skill Reel & Nudge Games For Sale', seoDesc: 'Legal skill-based reel games featuring Nudge and Swap mechanics for regulated markets.' },
    { id: 'fish-table', label: 'Fish Tables', icon: Fish, seoTitle: 'Ocean King Fish Tables Wholesale', seoDesc: '8-player and 4-player multiplayer fish hunting arcade machines and IGS compatible kits.' },
    { id: 'skill-arcade', label: 'Skill Arcade', icon: Joystick, seoTitle: 'Vertical Skill Arcade Cabinets', seoDesc: 'High-end vertical touch screen cabinets for modern skill gaming venues.' },
  ];

  // --- FILTER LOGIC ---
  const filteredProducts = PRODUCTS.filter(p => {
    let categoryMatch = true;
    if (activeCategory !== 'all') {
      categoryMatch = p.category === activeCategory;
    }
    let formFactorMatch = true;
    if (viewMode !== 'all') {
      formFactorMatch = p.formFactor === viewMode;
    }
    
    return categoryMatch && formFactorMatch;
  });

  const currentCategoryObj = categories.find(c => c.id === activeCategory);

  return (
    <div className="pt-24 bg-brand-900 min-h-screen">
      {/* Header */}
      <div className="bg-brand-950 py-16 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* SEO Optimized H1: Changes based on category to rank for specific terms */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {currentCategoryObj?.seoTitle}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             {currentCategoryObj?.seoDesc} Select a filter below to view <span className="text-brand-400 font-bold">Complete Machines</span> or <span className="text-blue-400 font-bold">Game Kits</span>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Tabs (Level 1) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProductCategory)}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                activeCategory === cat.id 
                  ? 'bg-brand-500 text-brand-900 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                  : 'bg-brand-800 text-gray-400 border border-brand-700 hover:text-white hover:border-brand-500'
              }`}
            >
              <cat.icon className={`h-4 w-4 mr-2 ${activeCategory === cat.id ? 'text-brand-900' : 'text-brand-500'}`} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Form Factor Switch (Level 2) */}
        <div className="flex justify-center mb-12">
           <div className="bg-brand-800 p-1.5 rounded-xl border border-brand-700 inline-flex shadow-lg relative">
              
              <button
                onClick={() => setViewMode('all')}
                className={`relative z-10 flex items-center px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  viewMode === 'all' 
                    ? 'bg-brand-700 text-white shadow-sm ring-1 ring-brand-600' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" /> View All
              </button>

              <button
                onClick={() => setViewMode('machine')}
                className={`relative z-10 flex items-center px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  viewMode === 'machine' 
                    ? 'bg-brand-500 text-brand-900 shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor className="h-4 w-4 mr-2" /> Complete Cabinets
              </button>

              <button
                onClick={() => setViewMode('kit')}
                className={`relative z-10 flex items-center px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  viewMode === 'kit' 
                    ? 'bg-blue-500 text-white shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Cpu className="h-4 w-4 mr-2" /> Game Kits
              </button>
           </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
                <div key={product.id} className="bg-brand-800 rounded-xl overflow-hidden border border-brand-700 hover:border-brand-500 transition-all hover:-translate-y-2 group flex flex-col h-full">
                    <div className="h-64 overflow-hidden relative">
                         <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                         <div className="absolute top-4 right-4 bg-brand-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-brand-600 shadow-lg">
                             {product.formFactor === 'machine' ? 'Complete Machine' : 'Game Kit'}
                         </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-brand-500 text-xs font-bold uppercase tracking-wider mb-2">
                            {product.category === 'fish-table' && <><Fish className="h-3 w-3 mr-1" /> Fish Table</>}
                            {product.category === 'skill-reel' && <><Dices className="h-3 w-3 mr-1" /> Skill Reel</>}
                            {product.category === 'skill-arcade' && <><Joystick className="h-3 w-3 mr-1" /> Skill Arcade</>}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 leading-snug">{product.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{product.description}</p>
                        
                        <div className="space-y-2 mb-6">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start text-xs text-gray-300">
                                    <Check className="h-3 w-3 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                        
                        <button className="w-full bg-brand-700 hover:bg-brand-600 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center mt-auto border border-brand-600">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20">
                <Layers className="h-16 w-16 text-brand-800 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">No Products Found</h3>
                <p className="text-gray-400">Try adjusting your category or form factor filters.</p>
                <button 
                  onClick={() => {setActiveCategory('all'); setViewMode('all');}}
                  className="mt-6 text-brand-500 font-bold hover:text-white transition-colors"
                >
                  Reset Filters
                </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default ProductShowcase;