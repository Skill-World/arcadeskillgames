import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Industry Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Latest News & Guides</h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-brand-400 font-bold hover:text-white transition-colors mt-4 md:mt-0">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-brand-900 rounded-xl overflow-hidden border border-brand-800 hover:border-brand-600 transition-all hover:-translate-y-1 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-400 border border-brand-700">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-xs mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-brand-500 text-sm font-bold flex items-center cursor-pointer">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <a href="#" className="inline-flex items-center text-brand-400 font-bold hover:text-white transition-colors">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;