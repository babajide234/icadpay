import { Container } from "../Layout/layoutElement";
import { Cat, Catimg, PopularContainer, PopularMain, PopularMainCat } from "./billsElements";
import {Link} from 'next/link';

export default function Popular({bills}) {
    
    console.log('bills:::::::',bills);

    return (
        <PopularContainer>
            <Container>
                <PopularMain>
                    <h2 className="">Popular </h2>
                    <PopularMainCat>
                        {
                            bills.map((data,i)=>{
                                return(
                                    // <a key={i} href={'/bills/dashboard/'+data.billerId}>
                                    //     <Cat >
                                    //         <Catimg src={data.billerLogoUrl} />
                                    //         <h3 className="">{data.billerId}</h3>
                                    //     </Cat>
                                    // </a>
                                    <a key={i} href={'/bills/dashboard/'+data.identifier}>
                                        <Cat >
                                            <Catimg src={data.image} />
                                            <h3 className="">{data.name}</h3>
                                        </Cat>
                                    </a>
                                )
                            })
                        }
                    </PopularMainCat>
                </PopularMain>
            </Container>
        </PopularContainer>
    );
}