import  styled from 'styled-components';

export const ButtonDefault = styled.button`
    background: #F4F4F4;
    outline: none;
    border: none;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    height: 40px;
    width: 120px;
    border-radius: 5px;
    color: #394D93;
    &:hover{
        cursor: pointer;
        background: #394D93;
        color: #F4F4F4;
    }

`

export const ButtonMain = styled.button`
    outline: none;
    border: none;
    height: 70px;
    width: 227px;
    border-radius: 10px;
    background-color: #DC0D11;
    box-shadow: 0px 10px 20px rgba(220, 13, 17, 0.25);
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        background: #B30020;
        box-shadow: 0px 10px 20px rgba(220, 13, 17, 0.25);
        h2{
            margin-right: 40px;
        }
    }
    h2{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        margin-right: 5px;
        transition:all ease-in-out .3s;
    }
`
export const ButtonSub = styled.button`
    outline: none;
    border: none;
    width: 227px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background: transparent;
    h3{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        margin-right: 5px;
        transition:all ease-in-out .3s;
        color: #DC0D11;
    }
    &:hover{
        cursor: pointer;
        color: #B30020;
        h3{
            margin-right: 40px;
        }
    }

`