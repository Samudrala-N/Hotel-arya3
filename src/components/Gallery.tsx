import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: '/images/IMG-20251021-WA0034.jpg',
      title: 'Hotel Exterior',
    },
    {
      url: '/images/IMG-20251021-WA0036.jpg',
      title: 'Luxury Lobby',
    },
    {
      url: '/images/IMG-20251021-WA0037.jpg',
      title: 'Deluxe Room',
    },
    {
      url: '/images/IMG-20251021-WA0038.jpg',
      title: 'Executive Suite',
    },
    {
      url: '/images/IMG-20251021-WA0030.jpg',
      title: 'Restaurant',
    },
    {
      url: '/images/WhatsApp Image 2025-10-21 at 19.42.25_6b0cbadd.jpg',
      title: 'Swimming Pool',
    },
    {
      url: '/images/WhatsApp Image 2025-10-21 at 19.42.25_badb6b2b.jpg',
      title: 'Spa & Wellness',
    },
    {
      url: '/images/IMG-20251021-WA0035.jpg',
      title: 'Conference Hall',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our stunning property and world-class facilities through these carefully curated images.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
