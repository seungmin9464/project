import { useEffect, useState } from "react";
import styled from 'styled-components';
import Banner from "./include/Banner";
import Header from "./include/Header";
import SliderDiv from "./include/Slider";
import { media } from "../../style/media_query";
import { API_KEY, API_URL } from "./Config";
import axios from 'axios';
import Footer from "./include/Footer";
import SearchForm from "./include/SearchForm";

const Net = () => {
    const [trand, setTrand] = useState([])                  //오늘의 모든 인기 목록
    const [trandMovie, setTrandMovie] = useState([])        //오늘의 인기 영화 목록
    const [trandTv, setTrandTv] = useState([])              //오늘의 인기 티비 목록
    const [comming, setComming] = useState([])              //개봉 예정작 목록
    const [searchTerm, setSearchTerm] = useState('')        //검색어 폼
    const [searchList, setSearchList] = useState([])        //검색 리스트

    const [media_type, setmedia_type] = useState('')        //미디어 타입

    const SEARCH_API = `${API_URL}search/multi?&api_key=${API_KEY}&language=ko&query=`

    useEffect(() => {
        axios.get(`${API_URL}trending/all/day?api_key=${API_KEY}&language=ko`)
            .then((res) => setTrand(res.data.results))
        
        axios.get(`${API_URL}trending/movie/day?api_key=${API_KEY}&language=ko`)
            .then((res) => setTrandMovie(res.data.results))
            
        axios.get(`${API_URL}trending/tv/day?api_key=${API_KEY}&language=ko`)
            .then((res) => setTrandTv(res.data.results))

        axios.get(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=ko`)
            .then((res) => setComming(res.data.results))
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(searchTerm){
            fetch(SEARCH_API + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setSearchList(data.results)
            })
            setSearchTerm('')
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <NetWrap>
            <Header 
                searchTerm={ searchTerm } 
                handleOnSubmit={ handleOnSubmit } 
                handleOnChange={ handleOnChange }
                media_type={ media_type }/>

            <MainBanner>
                <Banner/>
            </MainBanner>

            <PopilarMovies>
                {
                    searchList == 0 ?                
                    <SliderDiv
                        trand={ trand }
                        trandMovie={ trandMovie }
                        trandTv={ trandTv }
                        comming={ comming }/> :
                    <SearchForm
                        searchList={ searchList }
                        media_type={media_type}/>
                }

            </PopilarMovies>
            <Footer/>
        </NetWrap>
    );
};

export default Net;

const NetWrap = styled.section`
    background: #fff;
    .sc-jIZahH{
        background-color: #171717;
        border-top: none;
        & a{ color: #a2a2a2; }
        & p{ color: #a2a2a2; }
    }
`

const MainBanner = styled.div`
    width: 100%;
    /* height: calc(100vh - 80px); */
    height: 770px;
    margin-bottom: 20px;
    overflow: hidden;
    & div:nth-child(n+100){
        display: none;
    }
    ${media.desktop`
        height: 550px;
    `}
    ${media.tablet`
        height: 450px;
    `}
    ${media.medium`
        height: 400px;
    `}
    ${media.mobile`
        height: 200px;
    `}
`

const PopilarMovies = styled.div`
    width: 100%;
    padding-bottom: 40px;
`