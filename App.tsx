import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Compliance from './components/Compliance';
import ProductShowcase from './components/ProductShowcase';
import Factory from './components/Factory';
import ROICalculator from './components/ROICalculator';
import Solutions from './components/Solutions';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Page, ProductCategory } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentParam, setCurrentParam] = useState<string>('all');

  const handleNavigate = (page: Page, param: string = 'all') => {
    setCurrentPage(page);
    setCurrentParam(param);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Compliance />
            <div className="bg-brand-900 border-t border-brand-800">
               <Factory />
            </div>
            <ROICalculator />
          </>
        );
      case 'products':
        return <ProductShowcase initialCategory={currentParam as ProductCategory} />;
      case 'solutions':
        return <Solutions initialTab={currentParam} onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-900 selection:bg-brand-500 selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;