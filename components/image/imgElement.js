import styled from 'styled-components';

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    height: 90vh;
    margin-top: 30px;
    img{
        position: absolute;
    }
`

export const HeaderImage = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
`