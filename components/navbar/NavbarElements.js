import styled from 'styled-components'


export const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 80px;
    position: fixed;
    background: #FFFFFF;
    z-index: 1000;
    /* border-bottom: 1px solid #ccc; */
`
export const Nav = styled.div`
    display: flex;
    align-items: center;
`
export const NavLogo = styled.img`
    height: 39px;
    width: 116px;
    margin-right: 150px;
`
export const Menu = styled.ul`
    display:flex;
    justify-content: space-between;
`
export const MenuItem = styled.li`
    margin-right: 49px;
    a{
        text-decoration: none;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        color: #2B2C3E;
        width: fit-content;
        padding: 5px;
        &:hover{
            font-weight: 700;
        }
    }
`

export const ButtonContainer = styled.div`
    /* width: 30%; */
`