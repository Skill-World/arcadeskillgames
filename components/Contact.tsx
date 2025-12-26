import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, FileText, CheckCircle, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    business: '', 
    phone: '', 
    volume: '1-5 Units',
    message: '' 
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Received. A territory manager will contact you within 24 hours.");
    setFormState({ name: '', email: '', company: '', business: '', phone: '', volume: '1-5 Units', message: '' });
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-900">
      <div className="bg-brand-950 py-16 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-flex items-center px-4 py-1 rounded-full bg-brand-900 border border-brand-700 mb-6">
              <Globe className="h-4 w-4 text-brand-500 mr-2" />
              <span className="text-brand-400 text-xs font-bold uppercase">Manufacturer Direct • Worldwide Shipping</span>
           </div>
           {/* SEO Optimized H1 for High Intent B2B Traffic */}
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Apply for Wholesale Dealership</h1>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             Secure exclusive territory rights and factory-direct pricing. Join our global network of successful <strong>Skill Game Distributors</strong>.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-800 p-8 rounded-2xl border border-brand-700 shadow-lg">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                 <Briefcase className="mr-2 text-brand-500 h-5 w-5" />
                 Partner Benefits
              </h3>
              <ul className="space-y-4">
                 <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Factory Direct Margins:</strong> Cut out the middleman and increase your profit by 30-50%.</span>
                 </li>
                 <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Territory Protection:</strong> We respect your region. We don't sell to your local competitors.</span>
                 </li>
                 <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>White Label / OEM:</strong> Your logo on the cabinet startup screen & custom decals.</span>
                 </li>
                 <li className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Priority Support:</strong> Direct line to our R&D engineers for troubleshooting.</span>
                 </li>
              </ul>
            </div>

            <div className="bg-brand-900 p-8 rounded-2xl border border-brand-800">
              <h3 className="text-white font-bold text-xl mb-6">Contact Channels</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-800 p-3 rounded-lg mr-4 border border-brand-700">
                    <Phone className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Wholesale Hotline</h4>
                    <p className="text-gray-400 mt-1 text-lg font-mono">+1 (888) SKILL-GM</p>
                    <p className="text-xs text-gray-600">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-800 p-3 rounded-lg mr-4 border border-brand-700">
                    <Mail className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Dealer Support</h4>
                    <p className="text-gray-400 mt-1">partners@arcadeskillgames.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-brand-800 p-8 md:p-12 rounded-3xl border border-brand-700 shadow-2xl relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

               <div className="mb-8 border-b border-brand-700 pb-8 relative z-10">
                 <h2 className="text-2xl font-bold text-white mb-2">Dealership Application Form</h2>
                 <p className="text-gray-400">Please provide verifiable business details. We strictly serve B2B clients.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2">Contact Name</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={formState.company}
                        onChange={e => setFormState({...formState, company: e.target.value})}
                        className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        placeholder="Doe Amusements LLC"
                      />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2">Work Email</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                        className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Business Type</label>
                    <select 
                      value={formState.business}
                      onChange={e => setFormState({...formState, business: e.target.value})}
                      className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    >
                      <option value="">Select Category...</option>
                      <option value="distributor">Distributor / Route Operator (Reseller)</option>
                      <option value="retail">Gas Station / C-Store Owner (End User)</option>
                      <option value="laundromat">Laundromat Owner (End User)</option>
                      <option value="arcade">Arcade / Game Room (End User)</option>
                    </select>
                   </div>
                   <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Projected Order Volume</label>
                    <select 
                      value={formState.volume}
                      onChange={e => setFormState({...formState, volume: e.target.value})}
                      className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    >
                      <option value="1-5">1 - 5 Units (Trial Order)</option>
                      <option value="5-20">5 - 20 Units (Small Route)</option>
                      <option value="20-50">20 - 50 Units (Medium Route)</option>
                      <option value="50+">50+ Units (Container Load / Distributor)</option>
                    </select>
                   </div>
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">Project Details & Territory</label>
                    <textarea 
                      rows={4}
                      required
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-4 bg-brand-900 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      placeholder="Please describe your current operation, target territory (State/City), and specific equipment needs..."
                    ></textarea>
                 </div>

                 <button type="submit" className="w-full bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold py-5 rounded-lg transition-colors flex justify-center items-center shadow-[0_0_20px_rgba(16,185,129,0.4)] text-lg uppercase tracking-wide">
                   Submit Dealer Application <Send className="ml-2 h-6 w-6" />
                 </button>
                 
                 <p className="text-center text-xs text-gray-500 mt-4">
                   By submitting this form, you verify that you are a business entity interested in wholesale purchasing. We do not sell single units for home use.
                 </p>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;