import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    @media ${(props) => props.chanege.xl}{
        &:nth-child(3){
            height: auto;
        }
    }
`