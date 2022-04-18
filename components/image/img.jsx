import Image from "next/image";
import { ImageContainer, HeaderImage } from "./imgElement";

export default function Img(props){
    return (
        <ImageContainer>
            <HeaderImage
                src='/img/pic1.png'
                alt={props.alt}
                width={'150px'}
                height={'150px'}
                bottom={`160px`}
                left={`15px`}
            />
            <HeaderImage
                src='/img/pic4.png'
                // src={props.src}
                alt={props.alt}
                width={'250px'}
                height={'400px'}
                bottom={`100px`}
                left={`38%`}
            />
            <HeaderImage
                src='/img/pic2.png'
                // src={props.src}
                alt={props.alt}
                width={'150px'}
                height={'150px'}
                bottom={`70%`}
                left={`95%`}
            />
            <HeaderImage
                src='/img/pic3.png'
                // src={props.src}
                alt={props.alt}
                width={'200px'}
                height={'300px'}
                bottom={`90px`}
                left={`95%`}
            />
        </ImageContainer>
    );
}