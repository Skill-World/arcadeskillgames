import React from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
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

// --- 适配器组件：把网址参数转成组件参数 ---
const ProductWrapper = () => {
  const { category } = useParams(); 
  return <ProductShowcase initialCategory={(category as ProductCategory) || 'all'} />;
};

const SolutionWrapper = () => {
  const { tab } = useParams(); 
  const navigate = useNavigate();
  return <Solutions initialTab={tab} onNavigate={(page) => navigate(`/${page === 'home' ? '' : page}`)} />;
};

const BlogWrapper = () => {
  const navigate = useNavigate();
  return <Blog onNavigate={(page) => navigate(`/${page === 'home' ? '' : page}`)} />;
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero onNavigate={(page) => navigate(`/${page === 'home' ? '' : page}`)} />
      <Compliance />
      <div className="bg-brand-900 border-t border-brand-800">
         <Factory />
      </div>
      <ROICalculator />
    </>
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleGlobalNavigate = (page: Page, param?: string) => {
    let path = `/${page === 'home' ? '' : page}`;
    if (param && param !== 'all') {
      path += `/${param}`;
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-brand-900 selection:bg-brand-500 selection:text-white flex flex-col">
      <Navbar currentPage="home" onNavigate={handleGlobalNavigate} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductWrapper />} />
          <Route path="/products/:category" element={<ProductWrapper />} />
          <Route path="/solutions" element={<SolutionWrapper />} />
          <Route path="/solutions/:tab" element={<SolutionWrapper />} />
          <Route path="/blog" element={<BlogWrapper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer onNavigate={handleGlobalNavigate} />
    </div>
  );
};

export default App;