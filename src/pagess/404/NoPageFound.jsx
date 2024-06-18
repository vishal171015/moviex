import React from 'react'
import "./style.scss";
import ContentWrapper from "../../componentss/contentWrapper/ContentWrapper";
const NoPageFound = () => {
  
    return (
      <div className="pageNotFound">
          <ContentWrapper>
              <span className="bigText">404</span>
              <span className="smallText">Page not found!</span>
          </ContentWrapper>
      </div>

  )
}

export default NoPageFound