import React, { useState } from 'react';
import { INDUSTRY_SOLUTIONS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRY_SOLUTIONS[0].id);

  const activeSolution = INDUSTRY_SOLUTIONS.find(s => s.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  return (
    <section id="industries" className="py-20 bg-brand-900 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Tailored For Your Business</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just sell machines; we provide business models. Select your industry to see how we maximize your specific operational needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/4 space-y-2">
            {INDUSTRY_SOLUTIONS.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 text-left group ${
                  activeTab === solution.id 
                    ? 'bg-brand-500 text-brand-900 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : 'bg-brand-800 text-gray-400 hover:bg-brand-700 hover:text-white'
                }`}
              >
                <solution.icon className={`h-6 w-6 mr-3 ${activeTab === solution.id ? 'text-brand-900' : 'text-brand-500'}`} />
                <span className="font-bold">{solution.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area (Simulated Tank Page) */}
          <div className="lg:w-3/4 bg-brand-800 rounded-2xl border border-brand-700 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            <div className="md:w-1/2 relative h-64 md:h-auto">
               <div className="absolute inset-0 bg-brand-900/20 z-10"></div>
               <img 
                 src={activeSolution.imageUrl} 
                 alt={activeSolution.headline} 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
               <h4 className="text-2xl font-bold text-white mb-4">{activeSolution.headline}</h4>
               <p className="text-gray-400 mb-8 leading-relaxed">
                 {activeSolution.description}
               </p>

               <div className="space-y-6">
                 <div>
                   <h5 className="text-brand-400 text-sm font-bold uppercase tracking-wide mb-3">Solving Your Pain Points</h5>
                   <ul className="space-y-2">
                     {activeSolution.painPoints.map((point, idx) => (
                       <li key={idx} className="flex items-start text-sm text-gray-400">
                         <span className="text-red-400 mr-2">x</span> {point}
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h5 className="text-brand-400 text-sm font-bold uppercase tracking-wide mb-3">Your Strategic Advantage</h5>
                   <ul className="space-y-2">
                     {activeSolution.benefits.map((point, idx) => (
                       <li key={idx} className="flex items-start text-sm text-white">
                         <Check className="h-4 w-4 text-brand-500 mr-2 mt-1" /> {point}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>

               <div className="mt-8 pt-8 border-t border-brand-700">
                 <a href="#contact" className="inline-flex items-center text-white font-bold hover:text-brand-400 transition-colors">
                   Get {activeSolution.title} Quote <ArrowRight className="ml-2 h-4 w-4" />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;