import { FlexContainer } from '../../style/styles';
import styled from 'styled-components';
import Header from './include/Header';
import FirstSection from './FirstSection';
import { media } from '../../style/media_query';

const MainLayout = ({ children }) => {

  return (
    <WrapContainer>
      {/* <Header/> */}
      <FlexContainer>{ children }</FlexContainer>
    </WrapContainer>
  );

};

export default MainLayout;

const WrapContainer = styled.main`
  min-height: 100%;
  background-color: ${({ theme }) => theme.mainBg};
`
