import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function MapInfo() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-black relative">
      <div className="absolute inset-0 bg-red-900/10"></div>
      <div className="container relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-red-500">{t('home.horrorMaps')}</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/50 rounded-lg overflow-hidden mb-12">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{t('home.bloodMoonManor')}</h3>
                <p className="text-xl text-gray-300 max-w-2xl">
                  {t('home.manorDescription')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/30">
              <h4 className="text-xl font-semibold text-red-500 mb-4">{t('home.multiLevel')}</h4>
              <p className="text-gray-300">{t('home.multiLevelDesc')}</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/30">
              <h4 className="text-xl font-semibold text-red-500 mb-4">{t('home.basement')}</h4>
              <p className="text-gray-300">{t('home.basementDesc')}</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/30">
              <h4 className="text-xl font-semibold text-red-500 mb-4">{t('home.secretMech')}</h4>
              <p className="text-gray-300">{t('home.secretMechDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapInfo;