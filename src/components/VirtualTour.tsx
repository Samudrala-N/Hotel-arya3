import { useState } from 'react';
import { Play, Sparkles, Building2, Utensils, BedDouble, X } from 'lucide-react';

export default function VirtualTour() {
  const [showTourModal, setShowTourModal] = useState(false);

  const tourSpots = [
    {
      icon: Building2,
      title: 'Grand Lobby',
      image: '/images/IMG-20251021-WA0035.jpg',
      description: 'Experience the elegance of our welcoming entrance.',
      alt: 'Grand Lobby - Arya Palace Hotel',
    },
    {
      icon: BedDouble,
      title: 'Luxury Suites',
      image: '/images/IMG-20251021-WA0038.jpg',
      description: 'Tour our spacious and well-appointed rooms.',
      alt: 'Luxury Suites - Arya Palace Hotel',
    },
    {
      icon: Utensils,
      title: 'Dining Areas',
      image: '/images/IMG-20251021-WA0030.jpg',
      description: 'Explore our world-class restaurants and bars.',
      alt: 'Dining Areas - Arya Palace Hotel',
    },
    {
      icon: Sparkles,
      title: 'Spa & Wellness',
      image: '/images/WhatsApp Image 2025-10-21 at 19.42.25_badb6b2b.jpg',
      description: 'Discover our rejuvenating wellness facilities.',
      alt: 'Spa & Wellness - Arya Palace Hotel',
    },
  ];

  return (
    <section id="virtual-tour" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our magnificent property from the comfort of your home. Discover every corner of luxury.
          </p>
        </div>

        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2340&auto=format&fit=crop"
            alt="360° Virtual Tour - Arya Palace Hotel"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <button
              className="w-20 h-20 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-2xl"
              aria-label="Start 360° Virtual Tour"
              onClick={() => setShowTourModal(true)}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <h3 className="text-white text-2xl font-bold mb-2">360° Virtual Tour</h3>
            <p className="text-gray-200">Click to start your immersive hotel experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourSpots.map((spot, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <spot.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {spot.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {spot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Start Full Virtual Tour"
            onClick={() => setShowTourModal(true)}
          >
            <Sparkles className="w-5 h-5" />
            <span>Start Full Virtual Tour</span>
          </button>
        </div>
      </div>

      {showTourModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            aria-label="Close Virtual Tour"
            onClick={() => setShowTourModal(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">360° Virtual Tour</h2>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2340&auto=format&fit=crop"
              alt="360° Virtual Tour - Arya Palace Hotel"
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              Enjoy an immersive 360° view of Arya Palace Hotel. Explore our luxurious spaces and world-class amenities.
            </p>
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              onClick={() => setShowTourModal(false)}
            >
              Close Tour
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
