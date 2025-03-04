import { useEffect } from "react";
import { Link } from "react-router-dom";
import { media } from '../../../style/media_query';
import styled from 'styled-components';

const Header = ({handleOnSubmit, searchTerm, handleOnChange, media_type}) => {
  return (
    <HeaderDiv>
      <FilterContainer>
        <LeftDiv>
          {
            media_type == null 
            ? null 
            : <div></div>
          }
        </LeftDiv>

        <Logo>
          <Link to='/Net'>BEAKFLIX</Link>
        </Logo>

        <RightDiv>
          {
            media_type == null ? null :
            <form onSubmit={ handleOnSubmit }>
            <input 
              type='text' 
              placeholder='검색어를 입력해주세요.' 
              name='search'
              value={ searchTerm }
              onChange={ handleOnChange }/>
              </form>
          }

        </RightDiv>
      </FilterContainer>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.header`
  z-index: 9999;
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`

const FilterContainer = styled.div`
  min-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  ${media.pc`
    min-width: inherit;
    width: 100%;
  `}
`

const LeftDiv = styled.div`
  display: flex;
  height: 50px;
  align-items: flex-end;
  & > div{
    width: 200px;
    visibility: hidden;
  }
  
  ${media.medium`
    display: none;
    & > div{
      display: none;
    }
  `}
`
const Logo = styled.div`
  color: #fff;
  text-shadow: -1px 0px #333, 0px 1px #333, 1px 0px #333, 0px -1px #333;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: -2px;
  display: flex;
  align-items: center;
`

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  & input{
    max-width: 200px;
    padding: 10px 10px;
    border-radius: 3px;
    border-color: transparent;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  ${media.medium`
  `}
`