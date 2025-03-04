import React, { useEffect, useState } from 'react';
import { media } from '../../../../style/media_query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function useWindowSize() {
  const [size, setSize] = useState(250);

  useEffect(() => {
    function handleResize() {
      let width = 130 + window.innerWidth * 0.15;

      width = Math.max(width, 250);
      width = Math.min(width, 700);

      setSize(width);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

const MorePcList = () => {
  const width = useWindowSize();

  const [pcData, setPcData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('url(./image/fourthSection/project-img01.webp)');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const [isListVisible, setIsListVisible] = useState(false);

  // 리스트 토글 함수
  const toggleListView = () => {
    setIsListVisible((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://6740379ed0b59228b7ef1a05.mockapi.io/list/projects")
      .then((response) => response.json())
      .then((data) => setPcData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const openExternalLink = (url) => {
    // URL이 절대 경로가 아닌 경우, 앞에 https://를 붙여서 절대 경로로 만든다.
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(fullUrl, "_blank");
  };

  // 마우스 인 이벤트
  const handleMouseOver = (imageUrl, index) => {
    setHoverIndex(index);
    setBackgroundImage(`url(./image/fourthSection/project-img${index+1}.webp)`);
    setIsHovering(true);
  };
  
  // 마우스 아웃 이벤트
  const handleMouseOut = () => {
    setHoverIndex(null);
    setBackgroundImage('');
    setIsHovering(false);
  };

  return (
    <ContentsWrap>
      <Link to='/' className='back-btn'>&#8636;</Link>

      <div className='contents__wrap'>
        <ContentsInner>
          <ListWrap>
            <List>
              { pcData.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => openExternalLink(item.url)}
                    // onClick={toggleListView}
                    data-text={item.title}
                    onMouseOver={() => handleMouseOver(item.imageUrl, index)}
                    onMouseOut={handleMouseOut}>
                      {item.title}
                  </button>
                </li> ))}
            </List>

            <ProjectPreviewWrapper width={width} height={width}>
              <div 
                className='project-preview'
                style={{
                  backgroundImage: backgroundImage,
                  transition: 'background-image 0.5s ease, width 0.5s ease, opacity 0.5s ease',
                  width: hoverIndex !== null ? '100%' : '0%',
                  height: `${width + 80}px`,
                  backgroundSize: '102%',
                  backgroundPosition: 'top center',
                  backgroundRepeat: 'no-repeat',
                  overflow: 'hidden',
                  opacity: hoverIndex !== null ? '1' : '0', }} >
              </div>
            </ProjectPreviewWrapper>
          </ListWrap>
        </ContentsInner>
      </div>
    </ContentsWrap>
  )
}

export default MorePcList;

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
    top: 20px;
    left: 20px;
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
  ${media.tablet`padding: 80px 50px 80px 100px;`}
  ${media.pad`padding: 50px;`}
  ${media.mobile`padding: 40px 30px;`}
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

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;
`

const List = styled.ol`
  width: 40%;
  display: flex;
  flex-direction: column;
  order: 1;
  & li{
    display: block;
    width: 100%;
    &:nth-child(n+2){ margin-top: 30px; }
  }
  & button{
    font-size: 45px;
    font-weight: 600;
    color: #aaa;
    line-height: normal;
    position: relative;
    transition: ease .3s;
    &:before{
      width: 0;
      color: #fff;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      content: attr(data-text);
      transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
    }
    &:hover::before{
      width: 100%;
    }
  }

  ${media.pc`
    & button{ font-size: 30px; }
    &:nth-child(n+2){ margin-top: 20px; }
  `}
  ${media.pad` 
    & button{ font-size: 22px; }
  `}
  ${media.tablet` margin-top: 30px; `}
`
const ProjectPreviewWrapper = styled.div`
  width: 60%;
  height: 100%;
  position: sticky;
  top: 10%;
  display: flex;
  justify-content: center;
  right: 0%;
  order: 0;

  ${media.tablet` width: 60%; `}
  ${media.pad` top: 3%; `}
`