import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import VirtualTour from './components/VirtualTour';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check for user preference in localStorage, default to true (dark mode)
    const savedPreference = localStorage.getItem('darkMode');
    return savedPreference !== null ? JSON.parse(savedPreference) : true;
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    // Also update the class on the document element to ensure consistency
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Dining />
        <Gallery />
        <VirtualTour />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
