import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';
import { media } from '../../style/media_query';

const SecondSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <AboutArea name="ABOUT">
      <div className="container">
        <div className='img-wrap'>
          <img src="/image/secondSection/my-imoji.png" alt="나의 캐릭터" />
          <div className='working-year'>
            <span className='cnt'>5<sup>+</sup></span>
            <p>
              Years<br/>
              Experience<br/>
              Working
            </p>
          </div>
        </div>

        <div className='txt-wrap'>
          <h3>저는 <span>Publisher, Front-end</span><br/>백승민이라고 합니다.</h3>

          <ul>
            <li>
              <p>One,</p>
              복잡한 문제를 해결하고, 사용자에게 가치 있는 솔루션을 제공하는 데서 큰 보람을 느낍니다.
            </li>
            <li>
              <p>Two,</p>
              좀더 효율적이고 확장 가능한 애플리케이션을 만들도록 노력합니다.
            </li>
            <li>
              <p>Three,</p>
              클린코드를 위해 노력합니다.
            </li>
            <li>
              <p>Goal,</p>
              좋은 태도와 습관으로 좋은 리더가 되도록 노력하고 싶습니다.
            </li>
          </ul>
        </div>
      </div>
    </AboutArea>
  );
};

export default SecondSection;

const AboutArea = styled.section`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 8rem 0;
  display: flex;
  & .container{
    display: flex;
    flex-direction: column;
  }
  & .img-wrap{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 50px;
    & img{
      width: 40%
      ${media.medium`
        width: 50%
      `}
    }
  }
  & .working-year{
    display: block;
    span.cnt{
      font-size: 7.5rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.02em;
      color: #15b392;
      & sup{
        top: -.5em;
        font-size: 33.33%;
        vertical-align: super;
        position: relative;
      }
    }
    p{
      font-size: 1.375rem;
      line-height: 1.55;
      margin-top: 20px;
    }
  }
  & .txt-wrap{
    width: 100%;
    & h3{ 
      font-size: 3rem;
      font-weight: 600;
      color: ${({ theme }) => theme.textColor};
      line-height: 1.2;
    }
    & span{
      color: #15b392;
      font-weight: 900;
    }
    ul{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 50px;
      & li{
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
      }
      & p{
        color: ${({ theme }) => theme.textSubColor};
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 15px;
      }
    }
  }
    
  ${media.pc`
    & > h3{
      font-size: 45px;
      &:nth-child(1){ text-align: left; }
    }
  `}
  ${media.desktop`
    padding: 80px 100px;
  `}
  ${media.tablet`
    padding: 80px 50px;
    min-height: inherit;
    height: auto;
  `}
  ${media.medium`
    padding: 150px 50px;
    & .txt-wrap{
      & ul p{
        font-size: 30px;
        line-height: 1;
      }
      & ul li{
        font-size: 18px;
      }
    }
  `}
  ${media.mediumSmall`
    & .container{
      & .img-wrap{
        flex-direction: column;
        & img{
          width: 100%;
        }
      }
      & .working-year{
        display: flex;
        gap: 10px;
      }
      
      & .txt-wrap{
        & h3{ font-size: 2rem; }
        & ul{ grid-template-columns: 1fr; }
      }
    }
  `}
  ${media.mobile`
    padding: 80px 30px 40px;
    & .container{
      padding: 0px;
      & .txt-wrap{
        & h3{ font-size: 24px; }
        & ul li{ font-size: 16px; }
        & ul p{ font-size: 22px; margin-bottom: 10px; }
      }
    }

    & .img-wrap{ margin-bottom: 30px; }
    & .working-year{
      span.cnt{
        font-size: 5rem;
      }
      p{
        margin-top: 0px;
        line-height: 1.2;
      }
    }

  `}
  ${media.smallMo`
    
  `}
`

const TextArea = styled.div`
  &.textArea{
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: row;
    white-space: nowrap;
    line-height: 1.4;
    color: #aaaaaa;
    flex-direction: row;
    ${media.tablet`
      padding: 100px 0 0;
    `}
    ${media.medium`
      padding: 70px 0 0;
    `}
    ${media.mobile`
      padding: 40px 0 0;
    `}
  }
  em, p{
    font-size: 30px;
    font-weight: 600;
    line-height: normal;
  }
  br{ display: none; }
  span{
    color: #222;
    font-size: 40px;
    font-weight: 800;
    display: inline-block;
    text-decoration: underline;
    text-underline-position: under;
  }

  ${media.pc`
    &.textArea{
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    em, p{
      font-size: 45px;
    }
    span{
      font-size: 50px;
      line-height: 1.8;
    }
  `}
  ${media.tablet`
    em, p{
      font-size: 30px;
    }
    span{
      font-size: 35px;
      line-height: 2;
    }
  `}
  ${media.medium`
    em, p{
      font-size: 20px;
    }
    span{
      font-size: 24px;
      line-height: 2;
    }
  `}
  ${media.mobile`
    em, p{
      font-size: 22px;
    }
    span{
      font-size: 24px;
      line-height: 1.6;
    }
  `}
  ${media.small`
    line-height: nomal;
    em, p{
      font-size: 16px;
    }
    span{
      font-size: 18px;
      line-height: 1.8;
    }
  `}
`