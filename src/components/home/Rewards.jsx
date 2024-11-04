import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function Rewards() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-red-500">{t('rewards.title')}</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-lg border border-red-900/30 group hover:border-red-500 transition-colors duration-300">
            <div className="h-48 bg-red-900/20 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-red-500 text-6xl">🎴</span>
            </div>
            <h3 className="text-2xl font-semibold text-red-500 mb-4">{t('rewards.phaseOne')}</h3>
            <p className="text-gray-300">{t('rewards.phaseOneDesc')}</p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-lg border border-red-900/30 group hover:border-red-500 transition-colors duration-300">
            <div className="h-48 bg-red-900/20 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-red-500 text-6xl">⭐</span>
            </div>
            <h3 className="text-2xl font-semibold text-red-500 mb-4">{t('rewards.phaseTwo')}</h3>
            <p className="text-gray-300">{t('rewards.phaseTwoDesc')}</p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-lg border border-red-900/30 group hover:border-red-500 transition-colors duration-300">
            <div className="h-48 bg-red-900/20 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-red-500 text-6xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold text-red-500 mb-4">{t('rewards.phaseThree')}</h3>
            <p className="text-gray-300">{t('rewards.phaseThreeDesc')}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-900/50 p-8 rounded-lg border border-red-900/30">
            <h3 className="text-2xl font-semibold text-red-500 mb-6">{t('rewards.specialNote')}</h3>
            <div className="space-y-4 text-gray-300">
              <p>{t('rewards.finalReward')}</p>
              <p>{t('rewards.weatherEffect')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;