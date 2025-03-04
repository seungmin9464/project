import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import styled from 'styled-components';
import { media } from '../../../../style/media_query';
import { useTheme } from '../../../../context/themeProvider';

const slideData = [
  { id: 0, img: './image/pub/img-pub1.png', link: 'https://www.kiwontech.com/', name: '기원테크' },
  { id: 1, img: './image/pub/img-pub2.png', link: 'https://secuecloud.co.kr/', name: '시큐이클라우드' },
  { id: 2, img: './image/pub/img-pub3.png', link: 'https://secu-email.com/', name: '시큐이메일' },
  { id: 3, img: './image/pub/img-pub4.png', link: 'http://withus.cc/', name: '위더스' },
  { id: 4, img: './image/pub/img-pub5.png', link: 'https://kissu.co.kr/', name: '키슈' },
  { id: 5, img: './image/pub/img-pub6.png', link: 'http://www.kpta.co.kr/science', name: '대한물리치료사협회' },
  { id: 6, img: './image/pub/img-pub7.png', link: 'http://lbtraders.co.kr/main', name: '엘비크레이더스' },
  { id: 7, img: './image/pub/img-pub8.png', link: 'http://www.leehyobio.com/main', name: '이효바이오' },
]

const SliderDiv = () => {
  return (
    <SlideWrap>
      <h2>홈페이지 퍼블리싱</h2>
      <SlideInner>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {
            slideData.map((item) =>
              <SwiperSlide key={item.id}>
                <SlideContents>
                  <Contents>
                    <a href={item.link} target='_blank'>
                      <img src={item.img} />
                      <p>[ {item.name} ]</p>
                    </a>
                  </Contents>
                </SlideContents>
              </SwiperSlide>
            )
          }
        </Swiper>
      </SlideInner>
    </SlideWrap>
  );
};

export default SliderDiv;

const SlideWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h2{
    font-family: pretendard;
    font-weight: 500;
    font-size: 25px;
    text-align: left;
    width: 100%;
    color: #8d8d8d;
  }
  ${media.pc`
    text-align: center;
  `}
  ${media.desktop`
    margin: 30px auto;
    padding: 0 0 80px;
    & h2{
      font-size: 25px;
      text-align: center;
    }
  `}
  ${media.mobile`
    padding: 0px 10px;
  `}
`

const SlideInner = styled.div`
  margin-top: 20px;
  width: 100%;
  & > div{
    color: #fff;
    height: 300px;
  }
  ${media.desktop`
    margin-bottom: 50px;
  `}
  ${media.tablet`
    height: 250px;
  `}
`

const SlideContents = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & a{
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    & img{ width: 100%; }
    & p{ 
      margin: 10px 0;
      text-align: center;
      color: ${({ theme }) => theme.textColor};
      font-weight: 500;
    }
  }
`