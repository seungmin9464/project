import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../style/media_query';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../Config';
import axios from 'axios';

const ContentsCard = () => {

  let { id } = useParams()                            //id 값 받아오기
  let { media_type } = useParams()                    //타입 받아오기

  const [detailMovie, setDetailMovie] = useState()    //movie 상세
  const [detailTv, setDetailTv] = useState()          //tv 상세

  // 데이터 불러오기
  useEffect(() => {
    if (media_type === "movie") {

      axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko-KR`)
        .then(res => setDetailMovie(res.data));

    } else if (media_type === "tv") {

      axios.get(`${API_URL}tv/${id}?api_key=${API_KEY}&language=ko-KR`)
        .then(res => setDetailTv(res.data));
    }
  }, [])

  // 데이터 조회
  if (media_type === "movie") {
    if (!detailMovie ) return false
  } else if (media_type === "tv") {
    if (!detailTv ) return false
  }

  return (
    <div>
      <Contents>
        <MaxInner>
          <InfoWrap>
            <Card>
              <img src={`http://image.tmdb.org/t/p/w500${detailMovie ? detailMovie.poster_path : detailTv.poster_path}`} />
            </Card>

            <InfoInner>
              <h1 className='title'>{detailMovie ? detailMovie.title : detailTv.name}</h1>
              <p className='subTitle'>{detailMovie ? detailMovie.tagline : detailTv.tagline}</p>

              <GenersWrap>
                {
                  detailMovie?.genres.map((item) => <li key={item.id}>
                    {item.name}
                  </li>)
                }

                {
                  detailTv?.genres.map((item) => <li key={item.id}>
                    {item.name}
                  </li>)
                }
              </GenersWrap>

              <OverView>
                <p className='overText'>{detailMovie ? detailMovie.overview : detailTv.overview}</p>
              </OverView>
            </InfoInner>
          </InfoWrap>
        </MaxInner>
      </Contents>
    </div>
  );
};

export default ContentsCard;

const MaxInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;

  ${media.pc`
    max-width: inherit;
    padding: 0 30px;
  `}

  ${media.mobile`
    max-width: inherit;
    padding: 0 20px;
    margin: 0;
    width: 100%;
  `}
`

const Contents = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  z-index: 100;
  position: absolute;
  margin-top: -250px;
  & > div{
    height: auto;
  }

  ${media.desktop`
    height: 450px;
  `}
  ${media.tablet`
    height: auto;
  `}
  ${media.medium`
    margin-top: -150px;
  `}
`

const InfoWrap = styled.div`
  width: 1150px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(225, 225, 225,  0.3);
  border-radius: 10px;
  box-shadow: 8px 8px 10px rgb(0, 0, 0, 10%);

  ${media.desktop`
    width: 100%;
  `}

  ${media.tablet`
    flex-direction: column;
  `}

  ${media.medium`
    border-radius: 5px;
  `}
`

const Card = styled.div`
  width: 250px;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & img{
    max-width: 100%;
    height: auto;
  }
  ${media.tablet`
    height: auto;
    margin: 20px 0;
  `}
  ${media.medium`
    width: 150px;
  `}
`

const InfoInner = styled.div`
  width: calc(100% - 450px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .title{
    font-size: 50px;
    font-weight: 900;
    color: #fff;
  }
  & .subTitle{
    font-size: 25px;
    font-weight: 500;
    top: -10px;
    color: #c3c3c3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 10px 0;
  }

  ${media.desktop`
    width: calc(100% - 400px);
    height: 100%;
    & .title{ font-size: 40px; }
    & .subTitle{ font-size: 18px; }
  `}

  ${media.tablet`
    width: 90%;
    & .title{ color: #333; }
    & .subTitle{ color: #a1a1a1; }
  `}

  ${media.tablet`
    height: initial;
  `}

  ${media.mobile`
    margin-top: 20px;
    & .title{ font-size: 20px; }
    & .subTitle{ font-size: 14px; margin: 5px 0 0; }
  `}
`

const GenersWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  & li{
    background-color: #666;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 5px;
    color: #ddd;
    font-weight: 400; 
    margin-top: 5px;
  }

  ${media.tablet`
    margin: 0 0 5px 0;
  `}

  ${media.mobile`
    margin: 10px 0 5px;
    & li{
      padding: 3px 5px;
      border-radius: 3px;
      font-size: 14px;
    }
  `}
`

const OverView = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  & .overText{
    font-size: 20px;
    font-weight: 500;
    color: #333;
  }

  ${media.desktop`
    & .overText{font-size: 18px;} 
  `}

  ${media.tablet`
    margin: 10px 0 20px;
  `}

  ${media.mobile`
    & .overText{
      font-size: 14px;
    }
  `}
`