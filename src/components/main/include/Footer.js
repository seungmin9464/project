import styled from 'styled-components';
import { media } from '../../../style/media_query';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterDiv>
      <ol>
        <li>
          <Link></Link>
        </li>
      </ol>

      <p>&copy; 2025 Back-Site. All rights reserved.</p>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  width: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
  border-top: ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.mainBg};
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
  & p{
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
  }
  ${media.medium` padding: 20px 50px; & p{ font-size: 18px } `}
  ${media.mobile` padding: 15px 50px; & p{ font-size: 16px } `}
`
