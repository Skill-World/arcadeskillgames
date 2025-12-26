import React from 'react';
import { ShieldCheck, FileCheck, Lock, Scale } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <section id="compliance" className="py-20 bg-brand-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Keyword Rich H2 */}
            <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Legal & Compliant Operations</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Skill-Based Games vs. Gambling Devices</h3>
            <p className="text-gray-400 mb-6 text-lg">
              We engineer <strong>100% legal skill game machines</strong> designed to meet strict state regulations. Our software ensures the outcome is determined by player ability, not chance.
            </p>
            <p className="text-gray-400 mb-8">
              Whether it's the precise aiming in our Fish Hunters or the cognitive "Nudge & Swap" features in our vertical cabinets, our products are legally distinct from traditional casino slots.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FileCheck className="h-6 w-6 text-brand-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Certified Skill Math</h4>
                  <p className="text-sm text-gray-500">GLI/BMM standard logic for skill dominance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Scale className="h-6 w-6 text-brand-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold">State Compliance</h4>
                  <p className="text-sm text-gray-500">Modes for PA, GA (COAM), TX, and NE markets.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-brand-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold">Anti-Cheat I/O Board</h4>
                  <p className="text-sm text-gray-500">Hardware protection against EMP & Jammers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="bg-brand-800 rounded-2xl p-8 border border-brand-700 shadow-2xl">
                <div className="flex items-center mb-6">
                   <ShieldCheck className="h-10 w-10 text-brand-400 mr-4" />
                   <div>
                      <h4 className="text-xl font-bold text-white">The "Skill" Distinction</h4>
                      <p className="text-sm text-gray-400">Protecting your business license</p>
                   </div>
                </div>
                <ul className="space-y-4">
                   <li className="bg-brand-900 p-4 rounded-lg border border-brand-700">
                      <strong className="text-white block mb-1">Interactive Gameplay</strong>
                      <span className="text-gray-400 text-sm">Players must physically interact (shoot, touch, decide) to win. No auto-play allowed.</span>
                   </li>
                   <li className="bg-brand-900 p-4 rounded-lg border border-brand-700">
                      <strong className="text-white block mb-1">Mandatory Skill Impact</strong>
                      <span className="text-gray-400 text-sm">A skilled player will consistently outperform an unskilled player over time.</span>
                   </li>
                   <li className="bg-brand-900 p-4 rounded-lg border border-brand-700">
                      <strong className="text-white block mb-1">Transparent Rules</strong>
                      <span className="text-gray-400 text-sm">Game objectives are clearly displayed ("Nudge to Win"), ensuring informed play.</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;