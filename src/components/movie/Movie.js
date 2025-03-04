import Item from 'antd/lib/list/Item';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../style/media_query'

const Movie = ({ movie, media_type }) => {
  return (
    <Card>
      <Link to={`/${media_type ? media_type : movie.media_type}/${movie.id}`}>
        <img src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt='' />
      </Link>
    </Card>
  );
};

export default Movie;

const Card = styled.div`
  box-sizing: border-box;

  & img{
    width: auto;
    height: 100%;
    object-fit: cover;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.3);
  }
  ${media.mobile`
    & img{
      padding: 0;
      height: 180px;
    }        
  `}
`