import { Bed, Users, Maximize, Wifi } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: 'Deluxe Room',
      image: '/images/IMG-20251021-WA0037.jpg',
      price: '₹4,500',
      size: '320 sq ft',
      guests: 2,
      beds: '1 King Bed',
      description: 'Elegantly designed with modern amenities for a comfortable stay.',
    },
    {
      name: 'Executive Suite',
      image: '/images/IMG-20251021-WA0038.jpg',
      price: '₹7,500',
      size: '500 sq ft',
      guests: 3,
      beds: '1 King + Sofa Bed',
      description: 'Spacious suite with separate living area and premium furnishings.',
    },
    {
      name: 'Presidential Suite',
      image: '/images/IMG-20251021-WA0036.jpg',
      price: '₹12,000',
      size: '800 sq ft',
      guests: 4,
      beds: '1 King + 1 Queen',
      description: 'Luxurious suite with panoramic views and exclusive amenities.',
    },
    {
      name: 'Family Room',
      image: '/images/IMG-20251021-WA0034.jpg',
      price: '₹6,500',
      size: '450 sq ft',
      guests: 4,
      beds: '2 Queen Beds',
      description: 'Perfect for families with connecting rooms and kid-friendly features.',
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Accommodations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our range of elegantly appointed rooms and suites, each designed to provide the ultimate comfort and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  {room.price}<span className="text-sm">/night</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <Maximize className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <Bed className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <Wifi className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">Free Wi-Fi</span>
                  </div>
                </div>

                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
