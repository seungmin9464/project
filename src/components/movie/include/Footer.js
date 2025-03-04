import styled from 'styled-components';
import { media } from '../../../style/media_query';
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";

const Footer = () => {
  return (
    <FooterDiv className='footer'>
      <div>
      <FooterLogo>
        <a href='/'>
          <img src='../image/logo.png'/>
        </a>
      </FooterLogo>

      <FooterLink>
        <a href='https://github.com/seungmin9464/React.git' target='_blank'>
          <AiFillGithub/>
        </a>

        <a href='https://invited-cosmonaut-feb.notion.site/MAIN-db5452133653475fadfc9f26a04dff88' target='_blank'>
          <SiNotion/>
        </a>
      </FooterLink>

      <FooterInfo>
        <p>backseungmin92@gmail.com</p>
        <p>seung9464@naver.com</p>
      </FooterInfo>
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  width: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  & > div{
    display: flex;
    max-width: 1400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin: 0 auto;
  }
  &.footer{
    position: relative;
    margin-top: 10vh;
  }
  ${media.medium`
  &.footer{
    margin-top: 0px;
  }
  `}
`

const FooterLogo = styled.p`
  width: 100%;
  & a{
    width: 40px; 
    display: block;
    margin: 0 auto;
    & img{
      width: 100%;
    }
  }
`

const FooterLink = styled.ul`
  width: 100%;
  color: #333;
  margin-top: 15px;
  font-size: 40px;
  & a{
    margin: 0 10px;
  }
  ${media.mobile`
    font-size: 30px;
  `}
`

const FooterInfo = styled.ul`
  & p{
    cursor: pointer;
    color: #333;
  }
`