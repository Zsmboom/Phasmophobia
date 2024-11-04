import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const platforms = [
  {
    id: 'steam',
    url: 'https://store.steampowered.com/app/739630/Phasmophobia/',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.6 3.8 10.2 9 11.6l3-4.2c-2.3-.6-4-2.7-4-5.2 0-3 2.5-5.5 5.5-5.5 3 0 5.5 2.5 5.5 5.5 0 2.5-1.7 4.6-4 5.2l3 4.2c5.2-1.4 9-6 9-11.6C24 5.4 18.6 0 12 0zM8.5 14.2l-2.2-1.1c.4.8 1.1 1.5 2 1.8.9.3 1.9.2 2.7-.3.8-.5 1.3-1.3 1.5-2.2.2-.9 0-1.9-.5-2.7-.5-.8-1.3-1.3-2.2-1.5-.9-.2-1.9 0-2.7.5l2.3 1.2c1.1.6 1.6 2 1 3.1-.6 1.1-2 1.6-3.1 1zm7.9-3.5l-3.3-1.7c.8-.5 1.8-.6 2.7-.4.9.2 1.7.8 2.2 1.6.5.8.6 1.8.4 2.7-.2.9-.8 1.7-1.6 2.2-.8.5-1.8.6-2.7.4-.9-.2-1.7-.8-2.2-1.6l3.4 1.7c1.1.6 2.5.1 3.1-1 .5-1.1.1-2.5-1-3.1z"/>
      </svg>
    )
  },
  {
    id: 'playstation',
    url: 'https://store.playstation.com/en-us/concept/10005673',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.85 14.8H7.55L4.5 17.45C3.55 16.4 3 15.05 3 13.55C3 10.25 5.7 7.55 9 7.55C9.65 7.55 10.25 7.7 10.85 7.9L12.45 6.95C11.45 6.35 10.25 6 9 6C4.85 6 1.5 9.35 1.5 13.5C1.5 15.45 2.2 17.25 3.35 18.65L8.85 14.8M9 4.5C11.95 4.5 14.5 6.15 15.75 8.5L17.4 7.45C15.85 4.65 12.7 2.5 9 2.5C4.1 2.5 0.1 6.5 0.1 11.4C0.1 13.85 0.95 16.15 2.4 17.95L3.75 16.95C2.5 15.45 1.75 13.5 1.75 11.4C1.75 7.25 5 4 9 4.5M9 0C13.1 0 16.75 2.45 18.45 5.95L20.1 4.95C18.1 1 13.85 -1 9 -1C3.25 -1 -1.5 3.75 -1.5 9.5C-1.5 12.45 -0.45 15.2 1.35 17.35L2.7 16.35C1.15 14.5 0.25 12.1 0.25 9.5C0.25 4.75 4.25 0 9 0"/>
      </svg>
    )
  },
  {
    id: 'xbox',
    url: 'https://www.xbox.com/en-US/games/store/phasmophobia-game-preview/9N6D60SBZN05',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.43 3.72C6.5 3.66 6.57 3.6 6.62 3.56C8.15 2.45 9.95 1.82 11.88 1.82C13.81 1.82 15.62 2.45 17.15 3.56C17.2 3.6 17.27 3.66 17.34 3.72C17.42 3.81 17.5 3.9 17.56 3.96C17.59 3.99 17.62 4.05 17.64 4.09C17.65 4.15 17.65 4.21 17.64 4.27C17.63 4.33 17.59 4.38 17.55 4.41C17.53 4.44 15.12 6.34 15.12 6.34C14.83 6.59 14.47 6.75 14.09 6.75C13.71 6.75 13.35 6.59 13.06 6.34L11.88 5.35L10.7 6.34C10.41 6.59 10.05 6.75 9.67 6.75C9.29 6.75 8.93 6.59 8.64 6.34C8.64 6.34 6.23 4.44 6.21 4.41C6.17 4.38 6.13 4.33 6.12 4.27C6.11 4.21 6.11 4.15 6.12 4.09C6.14 4.05 6.17 3.99 6.2 3.96C6.27 3.9 6.35 3.81 6.43 3.72M3.06 7.67C3.11 7.67 3.16 7.68 3.2 7.71C3.2 7.71 5.97 9.86 5.97 9.86C6.14 10 6.27 10.17 6.33 10.37C6.4 10.57 6.4 10.79 6.33 10.99C6.33 10.99 5.34 13.88 5.34 13.88C5.34 13.88 3.2 7.77 3.2 7.71C3.16 7.68 3.11 7.67 3.06 7.67M20.7 7.67C20.65 7.67 20.61 7.68 20.56 7.71C20.56 7.71 17.79 9.86 17.79 9.86C17.62 10 17.5 10.17 17.44 10.37C17.37 10.57 17.37 10.79 17.44 10.99C17.44 10.99 18.42 13.88 18.42 13.88C18.42 13.88 20.56 7.77 20.56 7.71C20.61 7.68 20.65 7.67 20.7 7.67M5.34 13.88L8.55 17.85C8.55 17.85 11.88 22.18 11.88 22.18C11.88 22.18 4.12 16.33 4.12 16.33C4.12 16.33 5.34 13.88 5.34 13.88M18.42 13.88L15.22 17.85C15.22 17.85 11.88 22.18 11.88 22.18C11.88 22.18 19.65 16.33 19.65 16.33C19.65 16.33 18.42 13.88 18.42 13.88"/>
      </svg>
    )
  }
];

function PlatformCard({ platform }) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-red-900/30 hover:border-red-500 transition-colors duration-300">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-red-500">
            {platform.icon}
          </div>
          <h2 className="text-3xl font-bold text-red-500">{t(`download.platforms.${platform.id}.name`)}</h2>
        </div>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {t(`download.platforms.${platform.id}.description`)}
        </p>
        
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          {t('download.downloadNow')}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Download() {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>Download - Blood Moon Phasmophobia</title>
        <meta name="description" content="Download Blood Moon Phasmophobia and start your horror adventure on your preferred platform" />
      </Helmet>
      
      <div className="pt-32 pb-24 min-h-screen bg-black">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              {t('download.title')}
            </span>
          </h1>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;