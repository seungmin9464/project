import styled from 'styled-components';
import {media} from '../../../style/media_query'

const MainImage = (props) => {
  return (
      <>
        <BgWrap>
            <MainImageWrap>
                <img src={ props.image }/>
                <H2>{ props.title }</H2>
            </MainImageWrap>
        </BgWrap>
      </>
  )
}

export default MainImage;

const BgWrap = styled.div`
    overflow: hidden;
    position: relative;
`

const MainImageWrap = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    & img{
        width: 100%;
    }
    ${media.pc`
        height: calc(50vh - 80px);
    `}
    ${media.desktop`
        height: calc(80vh - 80px);
    `}
    ${media.medium`
        height: calc(50vh - 80px);
    `}
`

const H2 = styled.h2`
    position: absolute;
    bottom: 0;
    font-size: 30px;
    font-weight: 900;
    margin: 50px;
    color: #fff;
    ${media.tablet`
        font-size: 20px;
        margin: 20px;
    `}
    ${media.mobile`
        margin: 10px;
    `}
`