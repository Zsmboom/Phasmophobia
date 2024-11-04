import React from 'react';
import { Helmet } from 'react-helmet-async';
import GameIntro from '../components/home/GameIntro';
import EventInfo from '../components/home/EventInfo';
import MapInfo from '../components/home/MapInfo';
import Rewards from '../components/home/Rewards';

function Home() {
  return (
    <>
      <Helmet>
        <title>Blood Moon Phasmophobia - 官方网站</title>
        <meta name="description" content="探索 Blood Moon Phasmophobia 的神秘世界。了解最新活动、地图信息和丰厚奖励。" />
        <meta name="keywords" content="Blood Moon, Phasmophobia, 游戏活动, 恐怖游戏, 多人游戏" />
      </Helmet>
      
      <div className="flex flex-col items-center w-full">
        <GameIntro />
        <EventInfo />
        <MapInfo />
        <Rewards />
      </div>
    </>
  );
}

export default Home;