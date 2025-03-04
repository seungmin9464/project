import React, { useState } from 'react';
import styled from 'styled-components';
import Recommendation from './Recommendation';
import Review from './Review';
import { AiOutlineMessage, AiOutlineShareAlt } from "react-icons/ai";

const DetailTab = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  
  const tabClickHandler=(index)=>{
    setActiveIndex(index);
  };

  const tabContArr=[
    {
        tabTitle:(
            <li className={ 
              activeIndex === 0 ? 
              "active" : "" } 
                onClick={ () => tabClickHandler(0) }> 
                  <AiOutlineMessage/>
            </li>
        ),

        // contents
        tabCount:(
            <Review/>
        )
    },
    {
        tabTitle:(
            <li className={ 
              activeIndex === 1 ? 
              "active" : "" } 
                onClick={ () => tabClickHandler(1) }> 
                  <AiOutlineShareAlt/>
            </li>
        ),

        // contents
        tabCount:(
          <Recommendation/>
        )
    }
];

  return (
    <TabWrap>
      <MaxInner>
        <h1>CONTENTS</h1>
        <p>컨텐츠</p>
        <Tabs>
          {
            tabContArr.map((section, index) => {
              return section.tabTitle
            })
          }
        </Tabs>
        <Contents>
          {tabContArr[activeIndex].tabCount}
        </Contents>
      </MaxInner>
    </TabWrap>
  );
};

export default DetailTab;

const MaxInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
`

const TabWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: #ddd;
  padding: 50px 0;
`

const Tabs= styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  background-color: #fff;
  & li{
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 20px;
    transition: all .3s;
    & svg{
      position: relative;
      font-size: 35px;
      font-weight: 500;
      padding: 10px;
      transition: ease .5s;
    }
    &.active{
      border-radius: 50px;
      background-color: #a1a1a1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -40px;
      & svg{
        color: #fff;
      }
    }
  }
`

const Contents = styled.div`
  margin: 10px 0;
`