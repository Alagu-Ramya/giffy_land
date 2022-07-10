import React from 'react';
import { CONFIG } from './config';
import { getFromNow } from './util';

const GifCard = ({ gif: { media_formats,content_description,tags,created }}) => {
    const gifUrl = media_formats?.[CONFIG.FORMAT]?.url;
    const fromNowStr = getFromNow(created);
    return (
      <div className="movie">
        <div>
          <p>{fromNowStr}</p>
        </div>
  
        <div>
          <img src={gifUrl ? gifUrl : CONFIG.PLACEHOLDER } alt={content_description} />
        </div>
  
        <div>
          <span>{tags.join(",")}</span>
          <h3>{content_description}</h3>
        </div>
      </div>
    );
    //return (<></>);
  }
  
  export default GifCard;