import React from 'react'
import "./style.scss";
import HeroBaner from './herobaner/HeroBaner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


const Homee = () => {
  return (
    <div className="homePage">
         <HeroBaner />
         <Trending/>
         <Popular/>
         <TopRated/>
        </div>
  )
}

export default Homee;