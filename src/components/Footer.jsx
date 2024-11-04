import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Blood Moon
            </h3>
            <p className="text-lg text-gray-400 mb-6">{t('footer.explore')}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.videos')}
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.download')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8">{t('footer.contact')}</h4>
            <p className="text-lg text-gray-400 mb-6">{t('footer.followUs')}</p>
            <p className="text-gray-400">
              {t('footer.support')}
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; 2024 Blood Moon Phasmophobia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;