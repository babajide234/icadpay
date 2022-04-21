import styled from "styled-components";
import Button from './../button/button';

export const BillheaderContainer = styled.div`
    width: 100%;
    height: 302px;
    background: #F3F6FF;
    padding-top: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .billcontainer{
        text-align: center;
        h2{
            //styleName: Header 2;
            font-family: Poppins;
            font-size: 36px;
            font-weight: 600;
            line-height: 43px;
            letter-spacing: 0em;
            text-align: center;
            color: #1D2646;
        }
        p{
            //styleName: Body 1 ;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: #1D2646;
        }
    }
`
export const SearchbarContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 61px;
    width: 635px;
    border-radius: 40.5px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    overflow: hidden;
    transform:translate(-50%,50%);
    box-shadow: 0px 5px 20px rgba(29, 38, 70, 0.1);
`
export const Searchbarinput = styled.input`
    width: 95%;
    height: 100%;
    outline: none;
    border:none;
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 20px;
`
export const SearchbarIcon = styled.img`
    
`
export const Searchbardropdown = styled.div`
    
`
export const PopularContainer = styled.div`
    min-height: 544px;
    width: 100%;
`
export const PopularMain = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    width: 100%;
    align-items: flex-start;
    padding-top: 107px;
    h2{
        //styleName: Header 4;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #1D2646;
    }
`
export const PopularMainCat = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const Cat = styled.div`
    height: 139px;
    width: 100px;
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #E7E8E5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    h3{
        //styleName: body 2 ;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        text-transform: capitalize;
    }

`
export const Catimg = styled.img`
height: 70px;
width: 70px;
`
export const Billimg = styled.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
    position: absolute;
    top: ${props=>props.top};
    left: ${props=>props.left};
`

export const SidebarContainer = styled.div`
height: calc(100vh - 80px);
width: 30%;
border: 1px solid rgba(116,116,120,.2);
margin-top: 80px;

`
export const DashSearchContainer = styled.div`
    height: 50px;
    width: 310px;
    background: #F9F9F9;
    border: 1px solid rgba(43, 44, 62, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    overflow: hidden;
`
export const DashSearchIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 5px;
`
export const DashSearchInput = styled.input`
    width: 90%;
    height: 100%;
    outline: none;
    border: none;
    background: #F9F9F9;
    border-left:1px solid rgba(116,116,120,.2);
    //styleName: body 3;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #2B2C3E;
    padding-left: 20px;
`
export const DashMain = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
`
export const DashListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    border-top: 1px solid rgba(116,116,120,.2);
`
export const DashListsContent = styled.ul`
width: 310px;
margin: 0 auto;
display: flex;
padding: 20px 0;
flex-flow: column;
li{
    width: 100%;
    height: 90px;
    border-radius: 10px;
    background: #F8F8F8;
    border: 1px solid rgba(29, 38, 70, 0.1);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    transition: all ease-in-out .3s;
    margin-bottom: 20px;
    &:hover{
        cursor: pointer;
        background: #ECF1FF;
        border: 1px solid #2C63EA;
    }
    .listnames{
        width: 80%;
        display: flex;
        flex-flow: column;
        h4{
            //styleName: Body 2 medium;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #2B2C3E;
            margin: 0;
        }
        h5{
            //styleName: Small 1;
            font-family: Poppins;
            font-size: 10px;
            font-weight: 500;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: left;
            color: #2B2C3E;
            margin: 0;
        }
    }
}
`
export const DashList = styled.li`
    
`
export const DListimg = styled.img`
    width: 90px;
    height: 90px;
    border: 1px solid #E3E3E4;
    box-sizing: border-box;
    border-radius: 50%;
    margin-right: 20px;
`
export const DashMainContent = styled.div`
    width: 70%;
    height: calc(100vh - 80px);
    margin-top: 80px;
    border-top: 1px solid rgba(116,116,120,.2);
    overflow: scroll;
    direction: rtl;

    .dashheader{
        width: 100%;
        height: 150px;
        background: #F9F9F9;
        padding: 30px;
        display: flex;
        align-items: center;
        direction: ltr;

        h3{
            //styleName: Header 3;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 0em;
            text-align: left;
            color: #1D2646;
            margin: 0;
        }
        p{
            //styleName: Body 1 ;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #1D2646;
            margin: 0;
        }
    }
    .dashcontent{
        width: 100%;
        height: 100%;
        padding: 30px 100px;
        display: flex;
        justify-content: space-between;
        h3{
            //styleName: Header 5;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #2B2C3E;
        }
        &_left{
            width: 60%;
            height: fit-content;
            padding-bottom: 100px;

            .input_container{
                border: 1px solid rgba(29, 38, 70, 0.1);
                width: 100%;
                height: 50px;
                background: #FFFFFF;
                box-sizing: border-box;
                border-radius: 10px;
                overflow: hidden;
                margin: 20px 0;
                input{   
                    width: 95%;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding-left: 20px;
                    //styleName: body 2 ;
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #2B2C3E;
                }
                span{
                    //styleName: Body 1 ;
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #DCDCDC;
                }
                select{
                    width: 98%;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding-left: 20px;
                    //styleName: body 2 ;
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #2B2C3E;
                }
            }
            .subtext{
                display: flex;
                flex-flow: column;
                margin-top: 40px;
                h3{
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #2B2C3E;
                }
                p{
                    //styleName: body 3;
                    font-family: Poppins;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #1D2646;
                    margin: 0;
                }
            }
        }
        &_right{
            width: 30%;
            .dashpay{
                height: 172px;
                width: 100%;
                border-radius: 10px;
                border: 1px solid #E3E3E4;
                box-sizing: border-box;
                margin-top: 50px;
                padding: 20px;
                h3{
                    //styleName: body 2 ;
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 21px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #1D2646;
                    margin: 0;
                }
                .price{
                    span{
                        //styleName: Body 1 ;
                        font-family: Poppins;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                        letter-spacing: 0em;
                        text-align: left;

                    }
                    h2{
                        //styleName: Header 3;
                        font-family: Poppins;
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 36px;
                        letter-spacing: 0em;
                        text-align: left;
                        color: #1D2646;
                        margin: 0;
                    }
                    Button{
                        height: 50px;
                        width: 100%;
                        border-radius: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #DC0D11;
                    }
                }
            }
        }

    }
`
export const DashListimg = styled.img`
    width: 48px;
    height: 48px;
    border: 1px solid #E3E3E4;
    border-radius: 10px;
`