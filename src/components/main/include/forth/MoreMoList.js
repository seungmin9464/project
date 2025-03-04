import React, { useEffect, useState } from 'react';
import { media } from '../../../../style/media_query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MoreMoList = () => {
  const [moData, setMoData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('url(./image/fourthSection/project-img01.webp)');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const [showImage, setShowImage] = useState(null);

  useEffect(() => {
    fetch("https://6740379ed0b59228b7ef1a05.mockapi.io/list/projects")
      .then((response) => response.json())
      .then((data) => setMoData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const toggleImage = (index) => {
    setShowImage(showImage === index ? null : index);
  };

  const openExternalLink = (url) => {
    // URL이 절대 경로가 아닌 경우, 앞에 https://를 붙여서 절대 경로로 만든다.
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(fullUrl, "_blank");
  };

  return(
    <ContentsWrap>
      <Link to='/' className='back-btn'>&#8636;</Link>

      <div className='contents__wrap'>
        <ContentsInner>
          <ListWrap>
            {
              moData.map((item, index) => (
                <div key={item.id}>
                  <button onClick={() => toggleImage(index)}>{item.title}</button>
                  <ImageWrapper show={showImage === index}>
                    <button onClick={() => openExternalLink(item.url)}>
                      <img src={`./image/fourthSection/project-img${index+1}.webp`}/>
                    </button>
                  </ImageWrapper>
                </div>
              ))
            }
          </ListWrap>
          </ContentsInner>
      </div>
    </ContentsWrap>
  )
}

export default MoreMoList;

const ContentsWrap = styled.section`
  width: 100%;
  min-height: auto;
  background-color: #ddd;
  box-sizing: border-box;
  padding: 100px;
  background-color: #222;
  & .contents__wrap{
    display: flex;
    justify-content: space-between;
  }
  & .back-btn{
    position: fixed;
    top: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: #222;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 660;
    color: #fff;
  }

  ${media.desktop`padding: 100px;`}
  ${media.tablet`padding: 80px 50px;`}
  ${media.pad`padding: 50px;`}
  ${media.mobile`
    padding: 40px 30px;
    & .back-btn{
      width: 35px;
      height: 35px;
      top: 30px;
      right: 30px;
      border-radius: 5px;
      font-size: 18px;
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
    color: #fff;

    ${media.pc` font-size: 60px; `}
    ${media.pad` font-size: 40px; `}
    ${media.mobile` font-size: 35px; `}
  }
`

const ListWrap = styled.ol`
  margin-top: 30px;
  width: 100%;
  height: auto;
  & > div{
    &:nth-child(n+2){
      margin-top: 10px;
    }
  }
  & button{
    text-align: left;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #aaa;
  }

  ${media.mobile`
    margin-top: 18px;
    & button{ font-size: 20px; }
  `}

`

const ImageWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  max-height: ${(props) => (props.show ? '500px' : '0')};
  margin-top: 5px;
  & img{
    width: 100%;
    height: auto;
  }
`