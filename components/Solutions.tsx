import React, { useState, useEffect } from 'react';
import { INDUSTRY_SOLUTIONS, COMPANY_NAME, PRODUCTS } from '../constants';
import { Check, ArrowRight, TrendingUp, ShieldCheck, Users, XCircle, ArrowLeft, LayoutGrid, Cpu, Monitor, HelpCircle, Star, BookOpen, Settings, BarChart3, Quote, MessageCircle, Phone } from 'lucide-react';
import { Page } from '../types';

interface SolutionsProps {
  onNavigate: (page: Page) => void;
  initialTab?: string;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate, initialTab }) => {
  const [viewMode, setViewMode] = useState<'overview' | 'detail'>('overview');
  const [activeTab, setActiveTab] = useState(INDUSTRY_SOLUTIONS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialTab && initialTab !== 'all') {
      const exists = INDUSTRY_SOLUTIONS.find(s => s.id === initialTab);
      if (exists) {
        setActiveTab(initialTab);
        setViewMode('detail');
      }
    } else {
      setViewMode('overview');
    }
  }, [initialTab]);

  const activeSolution = INDUSTRY_SOLUTIONS.find(s => s.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  const recommendedProducts = activeSolution.recommendedProductIds 
    ? PRODUCTS.filter(p => activeSolution.recommendedProductIds?.includes(p.id))
    : [];

  useEffect(() => {
    if (viewMode === 'detail') {
      document.title = `${activeSolution.title} Skill Game Solutions | ${COMPANY_NAME}`;
    } else {
      document.title = `Target Industries & Business Solutions | ${COMPANY_NAME}`;
    }
    return () => {
      document.title = `${COMPANY_NAME} | Skill Game Machines, Fish Tables & Custom Arcade Cabinets`;
    };
  }, [activeSolution, viewMode]);

  const handleCardClick = (id: string) => {
    setActiveTab(id);
    setViewMode('detail');
    window.scrollTo(0, 0);
  };

  const handleBackToOverview = () => {
    setViewMode('overview');
    window.scrollTo(0, 0);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- RENDER: OVERVIEW GRID ---
  const renderOverview = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {INDUSTRY_SOLUTIONS.map((solution) => (
           <a 
             key={solution.id}
             href={`#solutions/${solution.id}`}
             onClick={(e) => { e.preventDefault(); handleCardClick(solution.id); }}
             className="bg-brand-800 rounded-2xl overflow-hidden border border-brand-700 hover:border-brand-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full block"
           >
              <div className="h-40 overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand-900/40 z-10 group-hover:bg-brand-900/20 transition-colors"></div>
                 <img 
                   src={solution.imageUrl} 
                   alt={solution.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute top-3 left-3 z-20 bg-brand-900/80 backdrop-blur-sm p-2 rounded-lg border border-brand-600">
                    <solution.icon className="h-5 w-5 text-brand-400" />
                 </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                 <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{solution.title}</h3>
                 <p className="text-gray-400 text-xs line-clamp-3 mb-4 flex-grow leading-relaxed">
                   {solution.description.substring(0, 120)}...
                 </p>
                 <div className="flex items-center text-brand-500 font-bold text-xs uppercase tracking-wide mt-auto">
                   View Solution <ArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
           </a>
         ))}
       </div>
    </div>
  );

  // --- RENDER: TANK PAGE (Detail View) ---
  const renderDetail = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <button 
        onClick={handleBackToOverview}
        className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors font-medium"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Industries
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Industry Selector Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-32 space-y-6">
            <div className="bg-brand-800 p-4 rounded-xl border border-brand-700 shadow-xl max-h-[60vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-brand-400 font-bold uppercase text-xs tracking-wider mb-4 px-2">Quick Switch</h3>
              {INDUSTRY_SOLUTIONS.map((solution) => (
                <a
                  key={solution.id}
                  href={`#solutions/${solution.id}`}
                  onClick={(e) => { e.preventDefault(); setActiveTab(solution.id); }}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 text-left group border block ${
                    activeTab === solution.id 
                      ? 'bg-brand-500 text-brand-900 border-brand-500 shadow-lg font-bold' 
                      : 'bg-brand-900/50 text-gray-400 border-transparent hover:bg-brand-700 hover:text-white hover:border-brand-600'
                  }`}
                >
                  <solution.icon className={`h-4 w-4 mr-3 flex-shrink-0 ${activeTab === solution.id ? 'text-brand-900' : 'text-brand-500'}`} />
                  <span className="text-xs font-medium">{solution.title}</span>
                </a>
              ))}
              <button 
                  onClick={handleBackToOverview}
                  className="w-full flex items-center p-4 rounded-lg mt-4 border border-dashed border-brand-600 text-brand-400 hover:bg-brand-800 transition-all text-left"
                >
                  <LayoutGrid className="h-5 w-5 mr-3" />
                  <span className="text-sm">View All Cards</span>
                </button>
            </div>

            {/* SIDEBAR CTA (NEW) */}
            <div className="p-6 bg-gradient-to-br from-brand-900 to-brand-950 rounded-xl border border-brand-600 shadow-lg text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500 rounded-full blur-2xl opacity-10"></div>
               <h4 className="text-white font-bold text-lg mb-2 relative z-10">Need a Quote?</h4>
               <p className="text-gray-400 text-xs mb-4 relative z-10">
                 Get wholesale pricing for {activeSolution.title} equipment.
               </p>
               <button 
                 onClick={() => onNavigate('contact')}
                 className="w-full bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold py-3 rounded-lg text-sm uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] relative z-10 flex items-center justify-center"
               >
                 <Phone className="h-4 w-4 mr-2" /> Contact Sales
               </button>
            </div>
          </div>
        </div>

        {/* --- MAIN TANK CONTENT --- */}
        <div className="lg:w-3/4 space-y-12">
          
          {/* 1. HERO SECTION */}
          <div className="bg-brand-800 rounded-2xl border border-brand-700 overflow-hidden shadow-2xl relative">
            <div className="relative h-64 md:h-80 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent z-10"></div>
              <img src={activeSolution.imageUrl} alt={activeSolution.headline} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/50 backdrop-blur-md mb-4">
                  <activeSolution.icon className="h-4 w-4 text-brand-400 mr-2" />
                  <span className="text-brand-400 text-xs font-bold uppercase">{activeSolution.title} Solutions</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">{activeSolution.headline}</h1>
              </div>
            </div>
          </div>

          {/* 2. DEEP DIVE & ANALYSIS */}
          <div className="bg-brand-800 p-8 rounded-2xl border border-brand-700">
             <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-brand-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Why Skill Games Work for {activeSolution.title}</h2>
             </div>
             <p className="text-lg text-gray-300 leading-relaxed mb-8">
               {activeSolution.deepDive}
             </p>
             
             {/* Pain Points vs Solutions Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-900/10 p-6 rounded-xl border border-red-900/30">
                   <h3 className="flex items-center text-red-400 font-bold mb-4 uppercase text-sm tracking-wider">
                     <XCircle className="mr-2 h-5 w-5" /> Operational Challenges
                   </h3>
                   <ul className="space-y-4">
                     {activeSolution.painPoints.map((point, idx) => (
                       <li key={idx} className="flex items-start text-gray-300 text-sm">
                         <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0"></span>{point}
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="bg-brand-500/5 p-6 rounded-xl border border-brand-500/20">
                   <h3 className="flex items-center text-brand-400 font-bold mb-4 uppercase text-sm tracking-wider">
                     <ShieldCheck className="mr-2 h-5 w-5" /> Our Strategic Advantage
                   </h3>
                   <ul className="space-y-4">
                     {activeSolution.benefits.map((point, idx) => (
                       <li key={idx} className="flex items-start text-white text-sm font-medium">
                         <Check className="mr-3 h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />{point}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* INTERMEDIATE CTA (NEW) */}
             <div className="mt-8 flex justify-center">
                <button 
                   onClick={() => onNavigate('contact')}
                   className="inline-flex items-center space-x-2 text-brand-400 hover:text-white border-b-2 border-brand-500 hover:border-white transition-all pb-1 font-bold text-base"
                >
                   <span>Solve these challenges for your business today</span>
                   <ArrowRight className="h-4 w-4" />
                </button>
             </div>
          </div>

          {/* 3. COMPARISON DATA & SPECS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Tech Specs */}
             <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700">
                <div className="flex items-center mb-6">
                  <Settings className="h-6 w-6 text-brand-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">Installation Specs</h3>
                </div>
                <div className="space-y-4">
                   {activeSolution.techSpecs && activeSolution.techSpecs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-brand-800 pb-3 last:border-0 last:pb-0">
                         <span className="text-gray-400 text-sm font-medium">{spec.label}</span>
                         <span className="text-white text-sm font-bold">{spec.value}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* ROI Comparison */}
             <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-6 w-6 text-brand-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">Performance vs. Alternatives</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-brand-800">
                      <tr>
                        <th className="px-4 py-3 rounded-l-lg">Feature</th>
                        <th className="px-4 py-3">Traditional</th>
                        <th className="px-4 py-3 rounded-r-lg text-brand-400">Our Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                       {activeSolution.roiComparison && activeSolution.roiComparison.map((item, idx) => (
                         <tr key={idx} className="border-b border-brand-800 last:border-0">
                           <td className="px-4 py-4 font-medium text-gray-300">{item.feature}</td>
                           <td className="px-4 py-4 text-gray-500">{item.competitor}</td>
                           <td className="px-4 py-4 font-bold text-white">{item.us}</td>
                         </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>

          {/* 4. RECOMMENDED PRODUCTS */}
          {recommendedProducts.length > 0 && (
            <div className="bg-brand-800 p-8 rounded-2xl border border-brand-700">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Recommended Hardware</h3>
                  <button onClick={() => onNavigate('products')} className="text-brand-500 text-sm font-bold hover:text-white transition-colors">View All Products &rarr;</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedProducts.map(product => (
                    <div key={product.id} className="flex flex-col bg-brand-900 border border-brand-700 rounded-xl overflow-hidden hover:border-brand-500 transition-all group/prod">
                       <div className="relative h-40">
                         <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                         <div className="absolute top-2 left-2">
                           {product.formFactor === 'kit' 
                             ? <Cpu className="h-6 w-6 text-blue-400 bg-brand-950/90 p-1.5 rounded-lg" />
                             : <Monitor className="h-6 w-6 text-brand-400 bg-brand-950/90 p-1.5 rounded-lg" />
                           }
                         </div>
                       </div>
                       <div className="p-4 flex flex-col flex-grow">
                          <h4 className="text-white font-bold text-sm mb-2 group-hover/prod:text-brand-400 line-clamp-2">{product.title}</h4>
                          <button 
                            onClick={() => onNavigate('products')}
                            className="mt-auto w-full py-2 bg-brand-800 hover:bg-brand-700 text-gray-300 hover:text-white rounded-lg text-xs font-bold uppercase transition-colors"
                          >
                            View Specs
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-8 text-center border-t border-brand-700 pt-6">
                 <button onClick={() => onNavigate('contact')} className="inline-flex items-center text-white bg-brand-600 hover:bg-brand-500 px-6 py-2 rounded-full font-bold text-sm transition-colors shadow-lg">
                    Get Pricing for These Models <ArrowRight className="ml-2 h-4 w-4" />
                 </button>
               </div>
            </div>
          )}

          {/* 5. CASE STUDY & TESTIMONIAL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Case Study Card */}
             {activeSolution.caseStudy && (
               <div className="md:col-span-2 bg-gradient-to-br from-brand-800 to-brand-900 p-8 rounded-2xl border border-brand-700">
                  <div className="flex items-center mb-4">
                     <div className="bg-brand-500/20 p-2 rounded-lg mr-3">
                        <TrendingUp className="h-6 w-6 text-brand-400" />
                     </div>
                     <div>
                       <div className="text-brand-400 text-xs font-bold uppercase">Success Story</div>
                       <h3 className="text-xl font-bold text-white">{activeSolution.caseStudy.title}</h3>
                     </div>
                  </div>
                  <div className="text-4xl font-extrabold text-white mb-4">{activeSolution.caseStudy.metrics}</div>
                  <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-brand-600 pl-4">
                    "{activeSolution.caseStudy.summary}"
                  </p>
               </div>
             )}

             {/* Testimonial Card */}
             {activeSolution.testimonial && (
               <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700 flex flex-col justify-center relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-brand-800 transform rotate-180" />
                  <p className="text-gray-300 italic mb-6 relative z-10">"{activeSolution.testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                     <div className="h-10 w-10 rounded-full bg-brand-700 flex items-center justify-center font-bold text-brand-400 mr-3">
                        {activeSolution.testimonial.name.charAt(0)}
                     </div>
                     <div>
                        <div className="text-white font-bold text-sm">{activeSolution.testimonial.name}</div>
                        <div className="text-brand-500 text-xs">{activeSolution.testimonial.role}</div>
                     </div>
                  </div>
               </div>
             )}
          </div>

          {/* 6. BUYER'S GUIDE & FAQs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Buyers Guide */}
             <div className="bg-brand-800 p-8 rounded-2xl border border-brand-700">
                <div className="flex items-center mb-6">
                  <Check className="h-6 w-6 text-brand-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">Buyer's Checklist</h3>
                </div>
                <ul className="space-y-4">
                  {activeSolution.buyersGuide && activeSolution.buyersGuide.map((tip, idx) => (
                    <li key={idx} className="flex items-start bg-brand-900 p-3 rounded-lg border border-brand-800">
                       <span className="bg-brand-500 h-2 w-2 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                       <span className="text-gray-300 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
             </div>

             {/* FAQs */}
             <div className="bg-brand-800 p-8 rounded-2xl border border-brand-700 flex flex-col">
                <div className="flex items-center mb-6 justify-between">
                  <div className="flex items-center">
                    <HelpCircle className="h-6 w-6 text-brand-500 mr-3" />
                    <h3 className="text-xl font-bold text-white">Common Questions</h3>
                  </div>
                </div>
                <div className="space-y-3 flex-grow">
                   {activeSolution.faqs && activeSolution.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-brand-700 last:border-0">
                         <button 
                           onClick={() => toggleFaq(idx)}
                           className="w-full text-left py-3 flex justify-between items-center text-white font-bold text-sm focus:outline-none hover:text-brand-400 transition-colors"
                         >
                           {faq.question}
                           <span className={`text-brand-500 transform transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`}>▼</span>
                         </button>
                         {openFaqIndex === idx && (
                           <div className="pb-4 text-gray-400 text-sm leading-relaxed animate-fade-in">
                             {faq.answer}
                           </div>
                         )}
                      </div>
                   ))}
                </div>
                {/* FAQ CTA (NEW) */}
                <div className="mt-6 pt-4 border-t border-brand-700 flex justify-between items-center">
                   <span className="text-xs text-gray-500">Can't find the answer?</span>
                   <button onClick={() => onNavigate('contact')} className="flex items-center text-brand-400 text-xs font-bold hover:text-white transition-colors">
                      <MessageCircle className="h-3 w-3 mr-1" /> Ask an Expert
                   </button>
                </div>
             </div>
          </div>

          {/* 7. BOTTOM CTA */}
          <div className="bg-gradient-to-r from-brand-900 to-brand-800 p-10 rounded-2xl border border-brand-600 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-500 rounded-full opacity-20 blur-3xl"></div>
             <div className="relative z-10">
               <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Dominate the {activeSolution.title} Market?</h2>
               <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                 Get the full catalog, detailed wholesale price list, and ROI projection sheet specific to your industry.
               </p>
               <button 
                 onClick={() => onNavigate('contact')}
                 className="inline-flex items-center bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold px-10 py-5 rounded-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.5)] text-lg"
               >
                 Request {activeSolution.title} Pricing <ArrowRight className="ml-2 h-6 w-6" />
               </button>
               <p className="mt-4 text-gray-500 text-sm">Response typically within 4 hours during business days.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-brand-900">
      <div className="bg-brand-950 py-16 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {viewMode === 'overview' ? 'Target Industries & Solutions' : `${activeSolution.title} Solutions`}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {viewMode === 'overview' 
              ? "We don't just sell machines; we provide business models. Select your industry to see how we maximize your specific operational needs."
              : `Specialized skill gaming equipment and strategies for ${activeSolution.title.toLowerCase()}.`
            }
          </p>
        </div>
      </div>
      
      {viewMode === 'overview' ? renderOverview() : renderDetail()}
    </div>
  );
};

export default Solutions;