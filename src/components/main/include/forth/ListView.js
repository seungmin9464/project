import React from 'react';
import styled from 'styled-components';

const ListView = () => {
  return (
    <ListViewWrap>
      <ListViewInner>

      </ListViewInner>
    </ListViewWrap>
  )
}

export default ListView;

const ListViewWrap = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  padding: 100px;
  position: fixed;
  top: 0;
`

const ListViewInner = styled.section`

`