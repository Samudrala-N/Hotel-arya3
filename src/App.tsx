import { useState } from 'react';
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
  const [isDark, setIsDark] = useState(false);

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
