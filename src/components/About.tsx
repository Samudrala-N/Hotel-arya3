import { Award, Clock, MapPin, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: MapPin,
      title: '10 Min from Airport',
      description: 'Conveniently located near Biju Patnaik International Airport',
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock concierge and room service',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'World-class amenities and exceptional hospitality',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Advanced security systems for your peace of mind',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-amber-600">Arya Palace</span>
            </h2>
            <p className="text-xl font-semibold text-amber-700 dark:text-amber-400 mb-4">
              Make yourself feel like home and enjoy your unique experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Arya Palace is a must-visit destination at Bhubaneswar, the best business hotel at the City of Temples. The architectural traditions and eventful history of the Golden Triangle of the East surround our hotel. Located just 10 min drive from the Biju Patnaik Airport, Arya Palace is the ideal stay for all business & leisure travel in and around the city.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Bhubaneswar is home to some of the finest temples including the <span className="font-semibold">Lingaraja</span> and <span className="font-semibold">Mukteswar</span> Temples, as well as some of the country's best sporting infrastructure.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you're here for business conferences, cultural exploration, or a relaxing getaway, our dedicated team ensures every moment of your stay is exceptional.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/WhatsApp Image 2025-10-21 at 19.42.24_6430edc9.jpg"
                alt="Hotel Staff"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/IMG-20251021-WA0031.jpg"
                alt="Dedicated Team"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/IMG-20251021-WA0033.jpg"
                alt="Professional Staff"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/IMG-20251021-WA0035.jpg"
                alt="Team Members"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
