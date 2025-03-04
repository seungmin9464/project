import styled from 'styled-components';
import { media } from "../../../style/media_query";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../Config";
import axios from 'axios';

const Banner = () => {

  const [mainBanner, setMainBanner] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}trending/all/day?api_key=${API_KEY}&language=ko`)
         .then((res) => 
         setMainBanner(res.data.results[shuffle(res.data.results.length)]))
  }, [])

  function shuffle(maxLength) {
    const number = Math.floor(Math.random() * maxLength);
    return number;
  }
  
  return (
    <BannerWrap style={{
      backgroundImage: `url('http://image.tmdb.org/t/p/original${mainBanner.backdrop_path}')`, 
      backgroundPosition: 'top center', 
      backgroundSize: 'cover'}}
      />
  );
};

export default Banner;

const BannerWrap = styled.div`
  position: relative;
  height: 100%;
`

const BannerDiv = styled.div`
  position: relative;
  width: 100%;
  & img{ 
    width: 100%;
    top: 50%;
  }
  ${media.tablet`
  height: 450px;
  `}
  ${media.medium`
     height: 400px;
  `}
  ${media.mobile`
    height: 200px;
  `}
`

const BannerText = styled.div`
  position: absolute;
  z-index: 99;
  font-family: pretendard;
  font-size: 25px;
  font-weight: 600;
  padding-left: 20px;
  bottom: 20px;
  color: #fff;
`