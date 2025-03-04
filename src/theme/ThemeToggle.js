import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ThemeToggle({ toggle, mode }) {

  const openExternalLink = (url) => {
    // URL이 절대 경로가 아닌 경우, 앞에 https://를 붙여서 절대 경로로 만든다.
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      <button onClick={() => openExternalLink("https://github.com/seungmin9464/project")} style= {{ marginRight: '10' }}>
        {mode === 'dark' ? <FaGithub style={{ color: '#222' }}/> : <FaGithub style= {{color: '#fff' }} />}
      </button>
      {mode === 'dark' ? <BsFillMoonFill style={{ color: '#62009f' }}/> : <BsFillSunFill style= {{color: '#ffd8a7'}}/>}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: inherit;
  border: none;
  font-size: 24px;
  display: inline;
  cursor: pointer;
  display: flex;
  align-items: center;
  & button{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;