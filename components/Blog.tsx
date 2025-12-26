import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Page } from '../types';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-brand-900">
       <div className="bg-brand-950 py-16 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           {/* SEO Optimized H1 for Content Authority */}
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Skill Game Business & Compliance Blog</h1>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             Expert advice on operating skill games, navigating state compliance (PA, GA, TX), and maximizing arcade revenue.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-brand-800 rounded-2xl overflow-hidden border border-brand-700 hover:border-brand-500 transition-all hover:-translate-y-2 group h-full">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-400 border border-brand-600 flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-xs mb-4 space-x-4">
                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="h-3 w-3 mr-1" /> Editorial Team</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-brand-700">
                  <button className="text-brand-500 font-bold text-sm uppercase tracking-wide flex items-center group-hover:text-brand-300 transition-colors">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup (SEO Magnet) */}
        <div className="mt-20 bg-gradient-to-r from-brand-800 to-brand-900 rounded-3xl p-12 text-center border border-brand-700 relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
             <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
               Get the latest regulatory updates and new game release notifications delivered straight to your inbox.
             </p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="flex-grow px-6 py-4 rounded-lg bg-brand-950 border border-brand-700 text-white focus:outline-none focus:border-brand-500"
               />
               <button className="bg-brand-500 hover:bg-brand-400 text-brand-900 font-bold px-8 py-4 rounded-lg transition-colors">
                 Subscribe
               </button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;