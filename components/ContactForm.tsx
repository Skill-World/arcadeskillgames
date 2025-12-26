import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', business: '', phone: '', message: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Received. A territory manager will review your dealership request.");
    setFormState({ name: '', email: '', business: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-brand-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900 border border-brand-700 mb-6">
              <Briefcase className="h-4 w-4 text-brand-500 mr-2" />
              <span className="text-brand-400 text-xs font-bold uppercase">B2B Partnerships Only</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Apply for Dealership</h2>
            <p className="text-gray-300 mb-8 text-lg">
              We protect our distributors. To access wholesale pricing and territory rights, please verify your business details.
              <br/><br/>
              <strong>Why Partner With Us?</strong>
            </p>
            
            <ul className="space-y-4 mb-10">
               <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Factory-Direct Margin (No Middleman)
               </li>
               <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  Exclusive Territory Protection
               </li>
               <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-brand-500 rounded-full mr-3"></span>
                  White-Label / Custom Branding
               </li>
            </ul>
            
            <div className="space-y-6 pt-6 border-t border-brand-700">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-brand-500 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Wholesale Hotline</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-500 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Distributor Support</h3>
                  <p className="text-gray-400">partners@arcadeskillgames.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Business Verification</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Contact Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 bg-brand-800 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-brand-800 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              
              <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 bg-brand-800 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    placeholder="name@company.com"
                  />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Business Type</label>
                <select 
                  value={formState.business}
                  onChange={e => setFormState({...formState, business: e.target.value})}
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                >
                  <option value="">Select Category...</option>
                  <option value="distributor">Distributor (Looking for Supplier)</option>
                  <option value="gas_station">Gas Station / C-Store Owner</option>
                  <option value="laundromat">Laundromat Owner</option>
                  <option value="arcade">Arcade / Game Room Operator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Project Details / Volume</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 bg-brand-800 border border-brand-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Tell us about your locations and estimated order quantity..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold py-4 rounded-lg transition-colors flex justify-center items-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                Submit Dealer Application <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;