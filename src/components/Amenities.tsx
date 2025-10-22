import { Waves, Utensils, Dumbbell, Wifi, Car, Coffee, HeartPulse, Clock, MapPin, Briefcase } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Outdoor pool with poolside service',
    },
    {
      icon: Utensils,
      title: 'Multi-Cuisine Restaurant',
      description: 'Global and local culinary delights',
    },
    {
      icon: HeartPulse,
      title: 'Wellness Center',
      description: 'Spa and massage services',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: '24/7 modern gym facilities',
    },
    {
      icon: Coffee,
      title: 'Café & Bar',
      description: 'Premium beverages and snacks',
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi',
      description: 'High-speed internet throughout',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary parking service',
    },
    {
      icon: Car,
      title: 'Private Parking',
      description: 'Elegant space to park vehicles, safe place for your car and bikes',
    },
    {
      icon: MapPin,
      title: 'Travel Desk',
      description: 'Explore Temple City and the beautiful state of Odisha',
    },
    {
      icon: Clock,
      title: '24/7 Concierge',
      description: 'Always at your service',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enjoy a comprehensive range of facilities designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <amenity.icon className="w-8 h-8 text-amber-600 dark:text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
