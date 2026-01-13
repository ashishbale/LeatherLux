import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandPhilosophy from './components/BrandPhilosophy';
import FeaturedCollections from './components/FeaturedCollections';
import Craftsmanship from './components/Craftsmanship';
import WhyLeatherLux from './components/WhyLeatherLux';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';

function Home() {
  return (
    <main>
      <Hero />
      <BrandPhilosophy />
      <FeaturedCollections />
      <Craftsmanship />
      <WhyLeatherLux />
      <Testimonials />
    </main>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <Cart />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
