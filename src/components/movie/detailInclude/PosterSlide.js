import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../style/media_query';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../Config';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";

const PosterSlide = () => {

  let { id } = useParams()                            //id 값 받아오기
  let { media_type } = useParams()                    //타입 받아오기

  const [imageMovie, setImageMovie] = useState()      //movie poster list
  const [imageTv, setImageTv] = useState()            //tv actor list

  // 데이터 불러오기
  useEffect(() => {
    if (media_type === "movie") {

      axios.get(`${API_URL}movie/${id}/images?api_key=${API_KEY}&language=en`)
        .then((res) => setImageMovie(res.data));

    } else if (media_type === "tv") {

      axios.get(`${API_URL}tv/${id}/images?api_key=${API_KEY}&language=en`)
        .then((res) => setImageTv(res.data));

    }
  }, [])

  // 데이터 조회
  if (media_type === "movie") {
    if ( !imageMovie ) return false
  } else if (media_type === "tv") {
    if ( !imageTv ) return false
  }

  return (
    <div>
      <SlideWrap>
        <h1>POSTER</h1>
        <p>포스터</p>
        <SlideDivWrap className='posterDivWrap'>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            mousewheel={true}
            slidesPerView={3}
            touchRatio={1}
            loop={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Mousewheel]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            breakpoints={{
              790: {
                slidesPerView: 4,
              },
            }}>
            {
              imageMovie?.posters.map((item) => <SwiperSlide key={item.file_path}>
                <SlideDiv className='poster'>
                  <img src={`http://image.tmdb.org/t/p/w300${item.file_path}`} />
                </SlideDiv>
              </SwiperSlide>)
            }

            {
              imageTv?.posters.map((item) =>
                <SwiperSlide key={item.file_path}>
                  <SlideDiv className='poster'>
                    <img src={`http://image.tmdb.org/t/p/w300${item.file_path}`} />
                  </SlideDiv>
                </SwiperSlide>)
            }
          </Swiper>
        </SlideDivWrap>
      </SlideWrap>
    </div>
  );
};

export default PosterSlide;

const SlideWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .swiper-3d{
    padding: 50px 0;
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
  }
  & .swiper-slide-active{
    & .poster{
      transform: scale(1.12);
    }
  }

  ${media.pc`
    & .actorSlide{
       & img{
        width: 180px !important;
        height: 280px !important;
      }
    }
  `}

  ${media.medium`
    & .swiper-3d{
      perspective: 3000px !important;
      padding: 25px 0;
    }
    & h1{font-size: 40px;}
    & p{font-size: 16px;}
  `}

  ${media.mobile`
    & h1{font-size: 30px;}
    & p{
      margin-top: -10px;
      font-size: 16px;
    }
  `}
`

const SlideDivWrap = styled.div`
  height: auto;
  padding: 50px 0;
  & .swiper-3d{
    overflow: inherit;
    padding: 0;
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
    padding: 25px 0 50px;
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