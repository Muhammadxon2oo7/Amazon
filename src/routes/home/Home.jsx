import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import Littlecarusel from '../../components/little__carusel/Little-carusel';
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Main/>
      <Littlecarusel/>
    </div>
  )
}

export default Home