import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { media } from '../../style/media_query';

const FirstSection = () => {
  return (
    <MainTyping name='MAIN'>
      <Typing>
        CREATE THE&nbsp;
        <Typewriter
          options={{
          strings: ['WEB', 'PUBLISHER', 'DEVELOPER'],
            autoStart: true,
            loop: true,
          }}
        />
      </Typing>

      <p className='point-text'>Made by SEUNGMIN</p>
    </MainTyping>
  );
};

export default FirstSection;

const MainTyping = styled.section`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  font-family: pretendard;
  & > div{
    width: 100%;
    padding: 0 100px;
    display: flex;
    max-width: 1400px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    color: ${(props) => props.theme.mainTextColor};
  }
  & .point-text{
    position: absolute;
    padding: 40px;
    font-size: 24px;
    font-weight: 500;
    color: #15B392;
    right: 0;
    bottom: 0;
    font-family: "Condiment", serif;
    font-weight: 400;
    font-style: normal;
  }

  ${media.pc`
    & > div{
      padding: 0 50px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  `}
  ${media.medium`
    & .point-text{
    padding: 20px;
    }
  `}
  ${media.mobile`
    & > div{
      padding: 0 20px;
    }
    & .point-text{
      padding: 10px;
      font-size: 16px;
    }
  `}
`

const Typing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 90px;
  font-weight: 600;
  font-family: pretendard;
  top: 0;
  color: #696969 !important;
  & .Typewriter__wrapper{
    color: #15b392;
    font-family: "Roboto Slab", serif !important;
  }

  ${media.pc`
    line-height: 1.2;
  `}

  ${media.tablet`
    font-size: 70px;
  `}

  ${media.mobile`
    font-size: 50px;
  `}

  ${media.small`
    font-size: 30px;
  `}
`
