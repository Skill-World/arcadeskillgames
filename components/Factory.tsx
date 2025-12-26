import React from 'react';
import { FACTORY_STATS } from '../constants';

const Factory: React.FC = () => {
  return (
    <section id="factory" className="py-20 bg-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Our Capabilities</h2>
           {/* Keyword Rich Heading */}
           <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">25 Years of Skill Game Manufacturing</h3>
           <p className="text-gray-400 max-w-2xl mx-auto">
             We are not just a reseller. We are the <strong>OEM source</strong>. Our 50,000 sq.ft facility produces top-tier gaming cabinets, wire harnesses, and IGS-compatible game boards for the global wholesale market.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
           {FACTORY_STATS.map((stat, idx) => (
             <div key={idx} className="bg-brand-900 p-6 rounded-xl border border-brand-700 text-center hover:border-brand-500 transition-colors">
               <div className="inline-flex p-3 bg-brand-800 rounded-full mb-4">
                 <stat.icon className="h-6 w-6 text-brand-500" />
               </div>
               <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
               <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
             </div>
           ))}
        </div>

        <div className="bg-brand-900 rounded-2xl overflow-hidden border border-brand-700 flex flex-col md:flex-row">
           <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Custom OEM/ODM Services</h3>
              <p className="text-gray-400 mb-6">
                Build your own game brand. We offer complete <strong>White Label Manufacturing</strong> for master distributors:
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                 <li className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>Custom Cabinet Design (Metal/Wood)</li>
                 <li className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>Exclusive Software Skinning (Reskin)</li>
                 <li className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>Logo Startup Screens & Watermarks</li>
                 <li className="flex items-center"><span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>SAS Protocol & Cashless Integration</li>
              </ul>
              <a href="#contact" className="text-brand-400 font-bold hover:text-white transition-colors">Start Your OEM Project &rarr;</a>
           </div>
           <div className="md:w-1/2 min-h-[300px]">
              <img src="https://picsum.photos/800/600?grayscale" alt="Skill Game Factory Production Line" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;