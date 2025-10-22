import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Rooms', id: 'rooms' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Dining', id: 'dining' },
    { label: 'Events', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-amber-700 dark:text-amber-500">
              Arya Palace
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>

            <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500">
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200 shadow-md"
            >
              Book Now
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center justify-between px-4 py-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>Theme</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Globe className="w-5 h-5" />
                <span>Language</span>
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200 shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
