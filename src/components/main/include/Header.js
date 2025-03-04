import { useState } from 'react';
import { useTheme } from '../../../context/themeProvider';
import { FaBars, FaTimes } from 'react-icons/fa'
import { media } from '../../../style/media_query';
import { Link } from 'react-scroll/modules';
import ThemeToggle from '../../../theme/ThemeToggle';
import styled from 'styled-components';

const headerMenu = [
  { id: '1', name: 'MAIN' },
  { id: '2', name: 'ABOUT' },
  { id: '3', name: 'SKILL' },
  { id: '4', name: 'PROJECT' },
  { id: '5', name: 'CONTACT' },
]

const Header = () => {

  const [click, setClick] = useState(false);
  const [ThemeMode, toggleTheme] = useTheme();
  
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <HeaderDiv>
      <header>
        <Link to="/" className='headerLogo'>Seungmin.</Link>

        <div className='menuList'>
          <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>DarkMode</ThemeToggle>

          <Burger onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </Burger>

          <RightMenuList className={click ? 'active' : ''}>
            { headerMenu.map(item =>
              <Link
                to={ item.name }
                spy={ true }
                smooth={ true }
                duration={ 1300 }
                key={ item.id }>
                <MenuItem
                  onClick={closeMenu} >
                  {item.name}
                </MenuItem>
              </Link> ) 
            }
          </RightMenuList>
        </div>
      </header>
    </ HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100px;
  padding: 2.3rem 3rem;
  border-bottom: ${({ theme }) => theme.borderColor};
  backdrop-filter: blur(10px);
  top: 0;
  & header{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .headerLogo{
      font-size: 26px;
      font-weight: 600;
      color: ${({ theme }) => theme.textColor};
    }
  }
  & .menuList{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  ${media.medium`
    height: 80px;
    padding: 2rem 1.5rem;
  `}

  ${media.mediumSmall`
    height: 60px;
    & header{
      & .headerLogo{ font-size: 20px; }
    }
  `}
`

const Burger = styled.div`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.textColor};
  display: none;
  align-items: center;
  font-size: 25px;
  z-index: 9999;
  cursor: pointer;
  ${media.medium`display: inline-block;`}

  & svg{
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
  }
`

const RightMenuList = styled.div`
  display: flex;
  ${media.medium`
    position: fixed;
    display: flex;
    left: 100%;
    height: 100vh;
    top: 0;
    transition: ease .5s;
    padding-top: 60px;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    align-items: center;
    background-color: ${({ theme }) => theme.mainBg};
    &.active{ left: 0%; }
    & a.active li{ color: #15b392; }
  `}
`

const MenuItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.textSubColor};
  padding: 0 10px;
  font-size: 20px;
  position: relative;
  font-weight: 500;
  font-family: pretendard;
  z-index: 2;
  cursor: pointer;
  ${media.medium`
    font-size: 25px;
    font-weight: 900;
    padding: 30px 0;
    width: 100vw;
    text-align: center;
  `} 
`