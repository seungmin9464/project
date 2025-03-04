import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../../style/media_query';

const SearchForm = ({searchList, media_type}) => {

  console.log(media_type)

  return (
    <div>
      <MaxInner>
        <GridWrap>
          {
            searchList.map((item) => <div key={item.id} item={item}>
              <Link to={`/${media_type ? media_type : item.media_type}/${item.id}`}>
                <img src={"http://image.tmdb.org/t/p/w500" + item.poster_path}/>
              </Link>
            </div>)
          }
        </GridWrap>
      </MaxInner>
    </div>
  );
};

export default SearchForm;

const MaxInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: auto;

  ${media.pc`
    max-width: inherit;
    padding: 0 30px;
  `}

  ${media.mobile`
    max-width: inherit;
    padding: 0 20px;
  `}
`

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  & > div{
    width: 100%;
    display: flex;
    align-items: center;
  }
  & img{
    width: 100%;
  }

  ${media.medium`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.mobile`
    grid-template-columns: 1fr 1fr;
  `}
`