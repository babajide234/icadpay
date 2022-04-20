import styled from 'styled-components';


export const SectionBoxContainer =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 535px; */
`
export const IconContianter =styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: #6C97FF;
        opacity: 0.2;
        z-index: 10;
    }
    Img{
        z-index: 20;
    }
`
export const SectionBox =styled.div`
position: relative;
display: flex;
flex-flow: column;
width: calc(100% / 3 - 10px);
height: 300px;
padding: 40px;
    &::before{
        content: '';
        width: 100%;
        height: 300px;
        background: rgba(255, 255, 255, 0.21);
        opacity: 0.2;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
    }
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        color: #FFFFFF;
    }
    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;
    }
`

export const FeatureBox =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    p{
        text-align: center;
        //styleName: Body 1 ;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #1D2646;
    }

`
export const FeatureBoxContainer =styled.div`
    display: flex;

`
export const SectionFeatures =styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 200px 0px;
`
export const Featurecolumn =styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    h2{
        width: 480px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 120%;
        color: #1D2646;
    }
    p{
        //styleName: Body 1 ;
        width: 480px;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

    }
    .featurescontainer{
        display: flex;
        flex-flow: row wrap;
        width: 100%;
    }
    .features{
        width: fit-content;
        padding: 0px 20px;
        height: 60px;
        border: 1px solid rgba(29, 38, 70, 0.17);
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 20px;
        margin-bottom: 20px;
        h3{
            //styleName: Body 1 ;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: #1D2646;
            margin-left: 10px;
        }
    }

`
export const FeatureImg = styled.div`
    position: relative;
`
export const Circle = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 50%;
    background: ${props => props.bg};
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`

export const CollectionText = styled.div`
    position: relative;
    h2{
        //styleName: Header 2;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 120%;
        color: #1D2646;
    }
    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #1D2646;
        margin-bottom: 50px;
    }
    .collections{
        &_container{
            width: 100%;
            display:grid;
            grid-template-columns: 1fr 1fr;
        }
        &_item{
            display: flex;
            align-items: center;
            width: 100%;
            h3{
                //styleName: Body 1 ;
                font-family: Poppins;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
                color: #1D2646;
                margin-left: 30px;
            }
        }
        &_img{
            display: block;
            margin-right: 10px;
        }

    }
`

export const ServicesText = styled.div`
display: flex;
justify-content: space-between;
flex-flow: column;
h2{
    //styleName: Header 1;
    font-family: Poppins;
    font-size: 60px;
    font-weight: 600;
    line-height: 66px;
    text-align: left;
    margin: 0;
    color: #1D2646;
    margin-top: 100px;
}
p{
    //styleName: Body 1 ;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

}
`

export const Servicesimg = styled.div`
    display: flex;
    position: relative;
    height:70vh;
    img{
        position: absolute;
    }
`
    
export const Servicesimage = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
`

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column;
    .footer{
        &_contacts{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            padding:15px 0;
            border-bottom: 0.801249px solid #C4C4C4;
            &_contact{
                width: 50%;
            }
            &_social{
                display: flex;
                justify-content: end;
                align-items: center;
                width: 50%;
                &_list{
                    display: flex;
                    width: 50%;
                    justify-content: space-between;
                    align-items: center;
                }
                &_item{
                    width: 20px;
                    height: 20px;
                }
                &_link{
                    position: relative;
                    display: flex;
                    width: 36.06px;
                    height: 36.06px;
                    justify-content: center;
                    align-items: center;
                    &::after{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 36.06px;
                        height: 36.06px;
                        background: #FFFFFF;
                        border-radius: 50%;
                        border: 0.801249px solid #FFFFFF;
                        box-sizing: border-box;
                        opacity: .2;
                    }
                    &:hover{
                        &::after{
                            opacity: .4;
                        }
                    }
                }
            }
            h3{
                font-family: Poppins;
                font-size: 14px;
                font-weight: 600;
                line-height: 15px;
                letter-spacing: 0em;
                text-align: left;
                color: #FFFFFF;
                margin: 0;
            }
        }
        &_contact{
            display: flex;
            justify-content: space-between;
            &_item{
                display: flex;
                h4{                    
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 19.23px;
                    line-height: 118%;
                    color: #FFFFFF;
                    margin-left: 20px;
                }
            }
        }
        &_menu{
            padding: 36px 0px;
            display: flex;
            justify-content: space-between;
            &_nav{
                display: flex;
                align-items: center;
                &_list{
                    display: flex;
                    align-items: center;
                    margin-top: 25px;
                }
                &_item{

                }
                &_link{
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 19px;
                    letter-spacing: 0px;
                    text-align: center;
                    margin-right:28.0437px;
                    color: #FFFFFF;
                }
            }
        }
        &_copyright{
            display: flex;
            align-items: center;
            justify-content: space-between;
            &_rights{
                display: flex;
                h4{
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 19px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #FFFFFF;
                }
            }
            &_policy{
                display: flex;
                a{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14.4225px;
                    line-height: 129.5%;
                    color: #FFFFFF;
                    margin-right: 60px;
                    &:last-of-type{
                        margin-right: 0px;
                    }
                }
            }
        }
    }
`