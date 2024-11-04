import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function EventInfo() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">{t('home.eventDetails')}</span>
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-900/20 rounded-lg overflow-hidden h-[400px] relative group shadow-lg shadow-red-900/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('home.bloodMoonManor')}</h3>
              <p className="text-gray-300">{t('home.manorDescription')}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/30 shadow-lg shadow-red-900/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-red-500 mb-4">{t('home.eventDuration')}</h3>
              <p className="text-gray-300">{t('home.eventPeriod')}</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/30 shadow-lg shadow-red-900/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-red-500 mb-4">{t('home.eventRules')}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                  {t('home.rule1')}
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                  {t('home.rule2')}
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                  {t('home.rule3')}
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/30 shadow-lg shadow-red-900/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-red-500 mb-4">{t('home.howToParticipate')}</h3>
              <p className="text-gray-300">{t('home.participationDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;