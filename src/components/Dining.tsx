import { ChefHat, Coffee, Wine } from 'lucide-react';

export default function Dining() {
  const venues = [
    {
      icon: ChefHat,
      name: 'The Grand Pavilion',
      type: 'Multi-Cuisine Restaurant',
      image: '/images/IMG-20251021-WA0034.jpg',
      description: 'Experience fine dining with a menu featuring Indian, Chinese, and Continental cuisines prepared by master chefs.',
      timing: '7:00 AM - 11:00 PM',
    },
    {
      icon: Coffee,
      name: 'Aroma Café',
      type: 'Coffee Shop & Bakery',
      image: '/images/IMG-20251021-WA0031.jpg',
      description: 'Relax with freshly brewed coffee, artisanal pastries, and light snacks in a cozy atmosphere.',
      timing: '6:00 AM - 10:00 PM',
    },
    {
      icon: Wine,
      name: 'The Lounge Bar',
      type: 'Premium Bar',
      image: '/images/WhatsApp Image 2025-10-21 at 19.42.25_6b0cbadd.jpg',
      description: 'Unwind with signature cocktails, premium spirits, and a selection of wines in an elegant setting.',
      timing: '5:00 PM - 12:00 AM',
    },
  ];

  return (
    <section id="dining" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Culinary Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Savor exquisite flavors at our diverse dining venues, where every meal is a memorable experience.
          </p>
        </div>

        <div className="space-y-8">
          {venues.map((venue, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-full lg:w-1/2 h-80">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <venue.icon className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                      {venue.name}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-500 font-medium">{venue.type}</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {venue.description}
                </p>

                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Hours:</span>
                  <span>{venue.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
