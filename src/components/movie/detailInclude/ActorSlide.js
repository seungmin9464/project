import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { media } from '../../../style/media_query';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../Config';
import { ImUser } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import "swiper/css";

const ActorSlide = () => {

  let { id } = useParams()                            //id 값 받아오기
  let { media_type } = useParams()                    //타입 받아오기

  const [actorMovie, setActorMovie] = useState()      //movie actor list
  const [actorTv, setActorTv] = useState()            //tv actor list

  // 데이터 불러오기
  useEffect(() => {
    if (media_type === "movie") {

      axios.get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setActorMovie(res.data));

    } else if (media_type === "tv") {
      axios.get(`${API_URL}tv/${id}/credits?api_key=${API_KEY}&language=ko-KR`)
        .then((res) => setActorTv(res.data));
    }
  }, [])

  // 데이터 조회
  if (media_type === "movie") {
    if ( !actorMovie ) return false
  } else if (media_type === "tv") {
    if ( !actorTv ) return false
  }

  return (
    <div>
      <SlideWrap>
        <h1>ACTOR</h1>
        <p>배우</p>
        <SlideDivWrap>
          <Swiper
            className='actorSlide'
            slidesPerView={3}
            spaceBetween={30}
            autoHeight={false}
            breakpoints={{
              875: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1350: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 7,
              },
            }}>
            {
              actorMovie?.cast.map((item) => <SwiperSlide key={item.cast_id}>
                <SlideDiv className='actor'>
                  {
                    item.profile_path ?
                      <img src={`http://image.tmdb.org/t/p/original${item.profile_path}`} /> :
                      <User><ImUser /></User>
                  }
                  <p className='actorName'>{item.name}</p>
                </SlideDiv>
              </SwiperSlide>
              )
            }

            {
              actorTv?.cast.map((item) => <SwiperSlide key={item.cast_id}>
                <SlideDiv>
                  <img src={`http://image.tmdb.org/t/p/original${item.profile_path}`} />
                  <p className='actorName'>{item.name}</p>
                </SlideDiv>
              </SwiperSlide>
              )
            }
          </Swiper>
        </SlideDivWrap>
      </SlideWrap>
    </div>
  );
};

export default ActorSlide;

const SlideWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .actorSlide{ 
    padding-right: 10px; 
    & .actor{
      align-items: center;
      & img{
        width: 150px !important;
        height: 225px !important;
      }
    }
  }
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
    &.actorName{
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: center;
    }
  }
  & .swiper-slide-active{
    & .poster{
      transform: scale(1.12);
    }
  }

  ${media.pc`
    & .actorSlide{
      & .actor{
        & img{
          width: 180px !important;
          height: 280px !important;
        }
      }
    }
  `}

  ${media.medium`
    & h1{font-size: 40px;}
    & p{font-size: 16px;}
  `}

  ${media.mobile`
    & .actorSlide{
      padding-left: 10px;
      & .actor{
        & img{
          width: 90px !important;
          height: 130px !important;
        }
      }
    }
    & h1{font-size: 30px;}
    & p{
      margin-top: -10px;
      font-size: 16px;
      &.actorName{
        font-size: 14px;
        height: 42px;
      }
    }
  `}
`

const User = styled.div`
  width: 150px;
  height: 225px;
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(171, 171, 171, 0.3);
  display: flex;
  position: relative;
  justify-content: center;
  & svg{
    font-size: 140px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  ${media.pc`
    width: 180px;
    height: 280px;
  `}
  ${media.mobile`
    width: 90px;
    height: 140px;
    & svg{
      font-size: 60px;
    }
  `}
`

const SlideDivWrap = styled.div`
  height: auto;
  padding: 50px 0;
  & .swiper-3d{
    overflow: inherit;
  }
  & .swiper-wrapper{
    display: flex;
    & .actor{
      
    }
    & .poster{
      align-items: center;
      img{
        width: 100%;
      }
    }
  } 

  ${media.medium`
    padding: 25px 0;
  `}
`

const SlideDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > img{
    width: 100%;
    box-sizing: border-box;
  }
  & p{
    text-align: center;
    margin: 10px 0;
  }
  &.actor{
    & img{
      border-radius: 10px;
      box-shadow: 5px 5px 5px rgba(171, 171, 171, 0.3);
    }
  }
`