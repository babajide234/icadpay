import styled from 'styled-components';


export const Container = styled.div`
    width: 72%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
`
export const Column = styled.div`
    width: calc(100% / ${ props => props.divide } - 25px);
    /* height: 100vh; */
`
export const Section = styled.section`
    width: 100%;
    padding: ${props=>props.padding};
    background-color: ${props=>props.bg};
`
export const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin-bottom: 65px;
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 120%;
        color: ${props=>props.color};
        margin-bottom: 37px;
    }
    p{
        text-align: center;
        //styleName: Body 1 ;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        width: 614px;
        color: #1D2646;
    }
`