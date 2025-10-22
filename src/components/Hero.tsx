import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/WhatsApp Image 2025-10-21 at 19.42.24_6430edc9.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-amber-600/90 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            Welcome to Luxury
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Experience Royal
          <br />
          <span className="text-amber-400">Hospitality</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Discover luxury and comfort at Arya Palace, Bhubaneswar's premier business hotel with world-class amenities and exceptional service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#7AC142] hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Now
          </button>
          <button
            onClick={() => scrollToSection('virtual-tour')}
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Take a Tour
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
