import React, { useEffect, useState } from 'react';
import { media } from '../../../../style/media_query';
import styled from 'styled-components';

const MoListLayout = () => {
  const [moData, setMoData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('url(./image/fourthSection/project-img01.webp)');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const [showImage, setShowImage] = useState(null);

  useEffect(() => {
    fetch("https://6740379ed0b59228b7ef1a05.mockapi.io/list/top6")
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

  return (
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
  )
}

export default MoListLayout;

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