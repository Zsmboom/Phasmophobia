import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function GameIntro() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply"></div>
      
      <div className="container relative z-10 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight text-white animate-fade-in">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Phasmophobia</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">{t('home.title')}</span>
            </h1>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-red-900/30 shadow-lg shadow-red-900/20">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {t('home.eventPeriod')}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('home.eventDescription')}
              </p>
            </div>

            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-red-900/30 shadow-lg shadow-red-900/20">
              <h2 className="text-2xl font-bold text-red-500 mb-4">{t('home.communityEvent')}</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                {t('home.communityDescription')}
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('home.perfectTime')}
              </p>
            </div>

            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-red-900/30 shadow-lg shadow-red-900/20">
              <h2 className="text-2xl font-bold text-red-500 mb-4">{t('home.eventLocations')}</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {t('home.locationDescription')}
              </p>
              <div className="rounded-lg overflow-hidden shadow-xl shadow-red-900/20">
                <img 
                  src="/home/project/public/contract-board.jpg" 
                  alt={`${t('home.eventLocations')}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameIntro;