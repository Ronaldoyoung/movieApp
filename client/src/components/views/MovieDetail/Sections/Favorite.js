import React, { useEffect } from 'react';
import Axios from 'axios';

const Favorite = (props) => {

  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieTitle;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  useEffect(() => {

    let variables = {
      userFrom,
      movieId
    }

    Axios.post('/api/favorite/favoriteNumber', variables)
      .then(response => {
        if(response.data.success){

        }else{
          alert('숫자 정보를 가져오는데 실패했습니다.')
        }
      })

  }, [input]);


  return (
      <button>Favorite</button>
  );
}

export default Favorite;
