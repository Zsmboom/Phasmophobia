import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setShowLanguages(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/videos', label: t('nav.videos') },
    { path: '/download', label: t('nav.download') }
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleLanguageChange = (lang) => {
    setLanguage(lang.code);
    setShowLanguages(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight hover:text-red-400 transition-colors"
          >
            Phasmophobia
          </Link>
          
          <div className="hidden md:flex items-center justify-center space-x-16">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg transition-colors relative group ${
                  isActivePath(link.path) ? 'text-red-400' : 'text-white hover:text-red-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-red-400 transform origin-left transition-transform duration-300 ${
                  isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="relative language-selector">
            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowLanguages(!showLanguages);
              }}
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <span className="text-white">{currentLanguage.code.toUpperCase()}</span>
              <svg
                className={`w-4 h-4 text-white transform transition-transform ${showLanguages ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLanguages && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-dark-900/95 backdrop-blur-md shadow-xl border border-gray-800">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800/50 transition-colors ${
                      currentLanguage.code === lang.code ? 'bg-gray-800/50' : ''
                    }`}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-white">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 top-3 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg transition-colors ${
                  isActivePath(link.path) ? 'text-red-400' : 'text-white hover:text-red-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-2">Select Language</p>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex items-center justify-center space-x-2 p-2 rounded-lg ${
                      currentLanguage.code === lang.code ? 'bg-gray-800' : 'hover:bg-gray-800/50'
                    }`}
                    onClick={() => {
                      handleLanguageChange(lang);
                      setIsOpen(false);
                    }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-white text-sm">{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;