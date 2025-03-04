import { React, useEffect, useRef,useLayoutEffect  } from 'react';
import { media } from '../../style/media_query';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components';
import gsap from "gsap";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const slideData = [
  { id: 0, img: './image/secondSection/skill-01.png', skill: 'HTML' },
  { id: 1, img: './image/secondSection/skill-02.png', skill: 'CSS' },
  { id: 2, img: './image/secondSection/skill-03.png', skill: 'JAVASCRIPT' },
  { id: 3, img: './image/secondSection/skill-04.svg', skill: 'JQUERY' },
  { id: 4, img: './image/secondSection/skill-05.png', skill: 'SCSS/SASS' },
  { id: 5, img: './image/secondSection/skill-06.png', skill: 'REACT' },
  { id: 6, img: './image/secondSection/skill-07.png', skill: 'PHOTOSHOP' },
  { id: 7, img: './image/secondSection/skill-08.png', skill: 'XD' },
  { id: 8, img: './image/secondSection/skill-09.png', skill: 'FIGMA' },
]

const ThirdSection = () => {
  useLayoutEffect(() => {
    const refreshScrollTrigger = () => ScrollTrigger.refresh();
  
    // 🔥 강제 실행 (초기 로드 시)
    refreshScrollTrigger();
  
    // 🔄 화면 크기 변경 시 업데이트
    window.addEventListener("resize", refreshScrollTrigger);
  
    return () => {
      window.removeEventListener("resize", refreshScrollTrigger);
    };
  }, []);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function() {
        gsap.to(".skill-wrapper", {
          x: "-70%",
          duration: 20,
          smooth: 5,
          scrollTrigger: {
            trigger: ".skill-wrap",
            start: 'top 10%',
            end: "bottom",
            // markers:true,
            scrub: true,
            pin: true,
          }
        });
      },
      "(max-width: 799px)": function() {
        gsap.to(".skill-wrapper", {
          x: "-83%",
          duration: 20,
          smooth: 5,
          scrollTrigger: {
            trigger: ".skill-wrap",
            start: 'top 15%',
            end: "bottom",
            // markers:true,
            scrub: true,
            pin: true,
          }
        });
      },
    });
  });

  return (
    <SlideWrapper name='SKILL' className='skill-wrap' style={{overflowX: "hidden"}}>
      <div className='text-area'>
        <h2>About</h2>
        <h2>Skill</h2>
      </div>

      <div className='slide-area'>
        <div className='skill-wrapper'>
          {slideData.map((item) => 
            <div className='skill-box' key={item.id} style={{ right: 300 * item.id }}>
              <img src={item.img} />
              <p>{item.skill}</p>
            </div>)}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default ThirdSection;

const SlideWrapper = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 95) !important;
  margin-bottom: calc(var(--vh, 1vh) * 100) !important;
  position: relative;
  ${media.medium`
    height: calc(var(--vh, 1vh) * 80) !important;
  `}
  ${media.mediumSmall`
    height: calc(var(--vh, 1vh) * 70) !important;
  `}
  & .text-area{
    width: 100%;
    height: 430px;
    position: absolute;
    top: 50%;
    left: 0px;
    padding: 0px 150px;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
    justify-content: space-between;
    & > h2{
      font-size: 100px;
      font-weight: 800;
      color: #15b392;
      line-height: 1;
      &:last-of-type{
        color: ${({ theme }) => theme.textColor};
        text-align: right;
      }
    }

    ${media.pc`
      height: 400px;
      padding: 0px 100px;
      & > h2{
        font-size: 80px;
      }
    `}
    ${media.tablet`
      padding: 0px 50px;
    `}
    ${media.pad`
      height: 300px;
      & > h2{
        font-size: 60px;
      }
    `}
    ${media.medium`
      height: 420px;
      padding: 0 20px;
      & > h2{
        font-size: 5rem;
      }
    `}
    ${media.mediumSmall`
      height: 320px;
      padding: 0 40px;
      margin-right: 30px;
      & > h2{ font-size: 3.4rem; }
    `}
    ${media.mobile`
      & > h2{
        font-size: 30px;
      }
    `}
    ${media.smallMo`
      height: 260px;
      & > h2{
        font-size: 45px;
      }
    `}
  }

  & .slide-area{
    max-width: 1400px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    & .swiper{
      width: 100%;
      height: auto;
      overflow: visible;
    }
    & .skill-wrapper{ 
      display: flex;
      align-items: center; 
      left: 0;
      position: relative;
    }
    & .skill-box{
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, ${({ theme }) => theme.glass}, ${({ theme }) => theme.glassA} 10%);
      border-radius: 50px;
      border: solid 1px var(--color-gray);
      backdrop-filter: blur(7px);
      box-shadow: ${({ theme }) => theme.glassShadow} 0px 4px 34px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 80px;
      &:last-of-type{
        margin: 0;
      }
      & img{
        display: block;
        width: 110px;
      }
      & p{
        margin-top: 20px;
        font-size: 20px;
        font-weight: 600;
        color: #aaa;
      }
    }

    ${media.pc`
      padding: 0 100px;
      & .skill-box{
        width: 250px;
        height: 250px;
        margin-right: 50px;
      }
    `}

    ${media.tablet`padding: 0px 50px;`}

    ${media.pad`
      & .skill-box{
        width: 230px;
        height: 230px;
        margin-right: 40px;
      }
    `}

    ${media.medium`
      & .skill-box{
        width: 300px;
        height: 300px;
        margin-right: 40px;
        border-radius: 30px;
        & img{
          width: 40%;
        }
        & p{
          font-size: 35px;
        }
      }
    `}

    ${media.mediumSmall`
      & .skill-box{
        width: 250px;
        height: 250px;
        margin-right: 50px;
        & img{
          width: 30%;
        }
        & p{
          font-size: 22px;
        }
      }
    `}

    ${media.mobile`
      & .skill-box{
        width: 165px;
        height: 165px;
        margin-right: 20px;
        border-radius: 12px;
        & img{
          width: 35%;
        }
        & p{
          margin-top: 8px;
          font-size: 14px;
        }
      }
    `}
  }
`
