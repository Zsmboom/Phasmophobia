import React from 'react';
import { Helmet } from 'react-helmet-async';

const videos = [
  {
    id: 'HJMIOP9jNTg',
    title: 'Blood Moon Phasmophobia - Game Trailer',
    description: 'Explore the new Blood Moon event and experience unprecedented horror. In this special event, you\'ll face more challenging ghosts, unlock unique rewards, and work together with players worldwide to complete community goals.'
  },
  {
    id: 'vcRJyc4lcwM',
    title: 'Phasmophobia - Gameplay Showcase',
    description: 'Dive deep into Phasmophobia\'s core gameplay mechanics, explore every corner of the haunted manor, learn to identify different types of ghosts, and discover how to cooperate with teammates to survive.'
  },
  {
    id: 'q6BNCm8dVwM',
    title: 'Phasmophobia - Multiplayer Experience',
    description: 'Explore the horror world with friends and experience intense multiplayer cooperative gameplay. In this video, you\'ll see how players work together to complete investigation missions.'
  }
];

function VideoCard({ video }) {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-red-900/30">
      <div className="aspect-video relative group cursor-pointer">
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative"
        >
          <div className="absolute inset-0 bg-red-900/20 group-hover:bg-red-900/40 transition-colors duration-300"></div>
          <img 
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={`${video.title} Preview`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">{video.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
}

function Videos() {
  return (
    <>
      <Helmet>
        <title>Game Videos - Blood Moon Phasmophobia</title>
        <meta name="description" content="Watch exciting Blood Moon Phasmophobia gameplay videos and learn about game features" />
      </Helmet>
      
      <div className="pt-32 pb-24 min-h-screen bg-black">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">Game Videos</span>
          </h1>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={video.id} className={index === videos.length - 1 && videos.length % 2 !== 0 ? 'lg:col-span-2' : ''}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;