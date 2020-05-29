import React from 'react';
import { Col } from 'antd';

function GridCards (props){
  console.log('asdfadf' , props);
  return (
    <div>
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative' }}>
          <a href={`/movie/${props.movieId}`}>
            <img src={props.image} alt={props.movieName} style={{ width: '100%', height: '3' }}/>
          </a>
        </div>
      </Col>
    </div>
  );
}

export default GridCards;
