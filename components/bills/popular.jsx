import { Container } from "../Layout/layoutElement";
import { Cat, Catimg, PopularContainer, PopularMain, PopularMainCat } from "./billsElements";
import {Link} from 'next/link';

export default function Popular({bills}) {
    
    console.log('bills:::::::',bills);
    const images =[
        { identifier: 'airtime', src: '/img/phone.png' },
        { identifier: 'data', src: '/img/data.png' },
        { identifier: 'tv-subscription', src: '/img/subscription.png' },
        { identifier: 'electricity-bill', src: '/img/electric.png' },
        { identifier: 'education', src: '/img/education.png' },
        { identifier: 'events', src: '/img/events.png' },
        { identifier: 'other-services', src: '/img/others.png' },
        { identifier: 'insurance', src: '/img/insurance.png' }
    ]
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
                                            {   images.map(item => {
                                                if(data.identifier == item.identifier){

                                                    return(
                                                        <>
                                                        <Catimg src={item.src} />
                                                    </>
                                                    )
                                                }
                                                })
                                            }
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