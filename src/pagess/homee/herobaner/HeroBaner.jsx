import React from 'react'
import "./style.scss";

const HeroBaner = () => {
  return (
    <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">
                    Welcome
                </span>

                <span className="subTitle" style={{color:"white"}}>
                Millions of movies, TV shows and people to discover.
                Explore now.
                </span>
                <div className="searchInput">
                    <input type="text" 
                    placeholder='Search for a movie or tv show....'
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroBaner