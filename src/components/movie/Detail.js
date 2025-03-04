import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from './Config';
import { media } from '../../style/media_query';
import Header from "./include/Header";

import Footer from './include/Footer';

import ContentsCard from './detailInclude/ContentsCard';
import ActorSlide from './detailInclude/ActorSlide';
import PosterSlide from './detailInclude/PosterSlide';

const Detail = () => {

  let { id } = useParams()                            //id 값 받아오기
  let { media_type } = useParams()                    //타입 받아오기

  const [detailMovie, setDetailMovie] = useState()    //movie 상세
  const [detailTv, setDetailTv] = useState()          //tv 상세

  const [videoMovie, setVideoMovie] = useState()      //movie video list
  const [videoTv, setVideoTv] = useState()            //tv video list

  const [searchTerm, setSearchTerm] = useState('')        //검색어 폼
  const [searchList, setSearchList] = useState([])        //검색 리스트

  const SEARCH_API = `${API_URL}search/multi?&api_key=${API_KEY}&language=ko&query=`

  // 데이터 불러오기
  useEffect(() => {
    if (media_type === "movie") {

      axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko-KR`)
        .then(res => setDetailMovie(res.data));

      axios.get(`${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setVideoMovie(res.data));

    } else if (media_type === "tv") {

      axios.get(`${API_URL}tv/${id}?api_key=${API_KEY}&language=ko`)
        .then(res => setDetailTv(res.data));

      axios.get(`${API_URL}tv/${id}/videos?api_key=${API_KEY}&language=ko`)
        .then((res) => setVideoTv(res.data));
    }
  }, [])

  // 데이터 조회
  if (media_type === "movie") {
    if (!detailMovie || !videoMovie) return false
  } else if (media_type === "tv") {
    if (!detailTv || !videoTv) return false
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchTerm){
        fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
            setSearchList(data.results)
        })
        setSearchTerm('')
    }
  }

  // 비디오 데이터 없는 경우 처리
  const videoWrap = () => {
    try {
      if (typeof videoMovie != 'undefined') {
        return <SlideWrap>
          
          <h1>VIDEO</h1>
          <p>예고편</p>

          <iframe src={`https://www.youtube.com/embed/${videoMovie.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </SlideWrap>
        
      } else if (typeof videoTv != 'undefined') {
        return <SlideWrap>

          <h1>VIDEO</h1>
          <p>예고편</p>

          <iframe src={`https://www.youtube.com/embed/${videoTv.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </SlideWrap>

      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  return (
    <>
      <Header />
      <Wrap>
        <BgWrap>
          <Bg>
            <div className='BgImage' style={{ backgroundImage: `url('http://image.tmdb.org/t/p/original${detailMovie ? detailMovie.backdrop_path : detailTv.backdrop_path}')`, backgroundPosition: 'top center', backgroundSize: 'cover' }}>
              <Gradiant />
            </div>
          </Bg>
        </BgWrap>

        {/* Detail Card */}
        <ContentsCard />

        <ContentsWrap>
          <MaxInner>
            <ContentsDiv>
              {/* 배우 슬라이드 */}
              <ActorSlide />
            </ContentsDiv>

            <ContentsDiv className='videoWrap'>
              {/* 비디오 영역 */}
              {videoWrap('iframeMovie ? iframeTv : iframeMovie')}
            </ContentsDiv>

            <ContentsDiv>
              {/* 포스터 슬라이드 */}
              <PosterSlide />
            </ContentsDiv>
          </MaxInner>

          {/* <ContentsDiv className='dis-n'>
            <SlideWrap>
              <DetailTab />
            </SlideWrap>
          </ContentsDiv> */}
        </ContentsWrap>
        <Footer />
      </Wrap>
    </>
  );
};

export default Detail;

const MaxInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;

  ${media.pc`
    max-width: inherit;
    padding: 0 30px;
  `}

  ${media.mobile`
    max-width: inherit;
    padding: 0 20px;
  `}
`

const Wrap = styled.div`
  background-color: #f8f8f8;
  position: relative;
  height: auto;
  overflow: hidden;
  & img{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`

const BgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  display: block;
  & > div{
    display: flex;
    align-items: center;
    justify-content: center;
    &.BgImage{ 
      display: flex;
      height: 100vh;
    }
  }
  ${media.medium`
    height: 80vh;
    & > div{
      &.BgImage{ 
        height: 80vh;
      }
    }
  `}
`

const Gradiant = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 99;
  top: 0;
  background-color: rgba(0,0,0, .6);
  position: absolute;
`

// -----------------------------------------------

const ContentsWrap = styled.div`
  width: 100%;
  padding-top: 300px;
  position: inherit;
  & > div{height: auto}
  
  ${media.desktop`padding-top: 280px;`}  
  ${media.tablet`padding-top: 500px;`}
  ${media.medium`padding-top: 450px;`}
  ${media.mobile`padding-top: 400px;`}
  ${media.small`padding-top: 430px;`}
`

const ContentsDiv = styled.div`
  width: 100%;
  height: auto;
  &:nth-child(n+2){
    margin-top: 15vh;
  }
  & iframe{
    width: 100%;
    height: 800px;
    margin: 50px 0;
  }
  &.dis-n{display: none}
  & .posterDivWrap{
    overflow: hidden;
  }
  &.videoWrap{
    & h1{
      width: 100%;
      text-align: center;
      font-size: 50px;
      font-weight: 900;
      color: #333;
    }
    & p{
      width: 100%;
      margin-bottom: 0px;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: #6e6e6e;
    }
  }
  ${media.desktop`
    &:nth-child(n+2){
      margin-top: 10vh;
    }
    & iframe{
      height: 600px;
    }
  `}
  ${media.tablet`
    & iframe{
      height: 450px;
    }
  `}
  ${media.medium`
    & iframe{
      margin: 25px 0;
    }
  `}

  ${media.medium`
    &.videoWrap{
      & h1{font-size: 40px;}
      & p{font-size: 16px;}
    }
  `}

  ${media.mobile`
    &:nth-child(n+2){
      margin-top: 0vh;
    }
    & iframe{
      height: 250px;
    }
    &.videoWrap{
      & h1{font-size: 30px;}
      & p{
        margin-top: -10px;
        font-size: 16px;
      }
    }
  `}
`

// -----------------------------------------------

const SlideWrap = styled.div`
  & h1{
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: 900;
    color: #333;
  }
  & p{
    width: 100%;
    margin-bottom: 0px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #6e6e6e;
  }
`