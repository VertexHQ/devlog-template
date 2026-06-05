import { useEffect } from 'react';
import './styles/index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { useSakuraAnimation } from './hooks/useSakuraAnimation';

export default function App() {
  useSakuraAnimation();

  return (
    <>
      {/* Canvas for animated background */}
      <canvas id="sakura-canvas"></canvas>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <MusicPlayer />
        <About />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
