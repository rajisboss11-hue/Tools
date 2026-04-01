import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench, FileText, Home, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-2" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: 'Tools', path: '/tools', icon: <Wrench className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-blue-600">Blog&Tools</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            {/* High Revenue Direct Link in Navbar */}
            <a 
              href="https://example.com/your-adsterra-direct-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all animate-pulse"
            >
              <Zap className="w-4 h-4 mr-1 text-yellow-300" />
              Unlock Premium
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            {/* Mobile High Revenue Direct Link */}
            <a 
              href="https://example.com/your-adsterra-direct-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex justify-center items-center px-4 py-3 bg-blue-600 text-white rounded-lg text-base font-bold shadow-md hover:bg-blue-700 transition-all"
            >
              <Zap className="w-5 h-5 mr-2 text-yellow-300" />
              Unlock Premium Features
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
