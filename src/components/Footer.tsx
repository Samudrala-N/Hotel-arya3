import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-500 mb-4">Arya Palace</h3>
            <p className="text-gray-400 mb-4">
              Experience world-class hospitality in the heart of Bhubaneswar. Your comfort is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="hover:text-amber-500 transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-500 transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-500 transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-500 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                Conference Facilities
              </li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                Wedding Events
              </li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                Airport Transfer
              </li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                Spa & Wellness
              </li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                Corporate Packages
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Arya Palace Hotel, Bhubaneswar, Odisha 751020, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">+91 9827185811</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">reservations@aryapalace.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {currentYear} Arya Palace. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
