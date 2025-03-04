import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { media } from '../../style/media_query';

import styled from 'styled-components';
import PcListLayout from './include/forth/List';
import MoListLayout from './include/forth/MoList';
import MorePcList from './include/forth/MorePcList';

const FourthSection = () => {
  const [wide, setWide] = useState(window.innerWidth);
  const isMobile = wide <= 865;

  useEffect(() => {
    const handleResize = () => {
      setWide(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize); // resize 이벤트 등록
  
    // Cleanup: 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContentsWrap name='PROJECT'>
      <div className='contents__wrap'>
        <ContentsInner>
          <h3>PROJECTS</h3>
          <div>{isMobile ?
            <MoListLayout /> :
            <PcListLayout /> }</div>
        </ContentsInner>
      </div>
      
      <div>{isMobile ?
        <Link to='more-mo-list' className='moreBtn'>더보기</Link> :
        <Link to='more-pc-list' className='moreBtn'>더보기</Link> }</div>
    </ContentsWrap>
  );
};

export default FourthSection;

const ContentsWrap = styled.section`
  width: 100%;
  min-height: auto;
  box-sizing: border-box;
  padding: 200px 100px;
  & .contents__wrap{
    display: flex;
    justify-content: space-between;
  }
  & .moreBtn{
    max-width: 200px;
    height: 60px;
    margin: 60px auto 0;
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.borderColor};
    display: flex;
    justify-content: center;
    align-items: center;
    linie-height: 1.2;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColorRev};
    transition: ease .3s;
    background-color: ${({ theme }) => theme.mainBgRev};
    &:hover{
      background-color: #15b392;
      border: 2px solid transparant;
    }
  }

  ${media.desktop`
    padding: 100px;
  `}
  ${media.tablet`
    padding: 80px 50px;
  `}
  ${media.pad`
    padding: 50px;
    & .moreBtn{
      max-width: 140px;
      height: 50px;
      border-radius: 8px;
      font-size: 18px;
      margin: 40px auto 0;
    }
  `}
  ${media.mobile`
    padding: 40px 30px;  
  `}
  ${media.smallMo`
    & .moreBtn{
      max-width: inherit;
      width: 100%;
      border-radius: 6px;
      height: 45px;
      margin: 30px auto 0;
      font-size: 14px;
    }
  `}
`

const ContentsInner = styled.div`
  width: 100%;
  height: auto;
  & h3{
    width: 100%;
    height: auto;
    font-size: 80px;
    font-weight: 600;
    color: #15b392;

    ${media.pc` font-size: 60px; `}
    ${media.pad` font-size: 40px; `}
    ${media.mobile` font-size: 35px; `}
  }
`
