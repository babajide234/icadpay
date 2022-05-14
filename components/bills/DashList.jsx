import { DashListContainer, DashListimg, DashListsContent,DashListCheck } from './billsElements';
import react, { useEffect, useState } from 'react';
import axios from "axios";

export default function DashList({datas,setdata,bill}) {
    
    // console.log('DashList_____',datas)
    
    const [active, setactive] = useState();

    const handleClick = (e)=>{
        const id = e.currentTarget.id;
        setactive('');
        setdata([])

        // console.log('asnfjdncj', Object.keys(bill).length)

        // if(Object.keys(bill).length === 0){
        
        // console.log('DashList_____add',bill);
        
        datas.filter((item)=>{
            if(item.serviceID === id){
                setdata(item);
                setactive(item.serviceID);
                // handleVariety(item.serviceID)
            }
        })

        // console.log('DashList_____id',bill);
        
    }   
    // const handleVariety = async (id)=>{
    //     const variety = await axios.get('https://app-service.icadpay.com/api/AltBiller/serviceVariety?id='+id);

    //     const varietyData = await variety.data;
    
    //     // console.log('data',billsdata.products[0]);
    //     console.log('data',varietyData);
    // }
    return (
        <DashListContainer>
            <DashListsContent>
                {
                        datas.filter(Boolean).map((item,i)=>{
                            return(
                                        <>
                                            <li className={active == item.serviceID ? 'active':''} id={item.serviceID} onClick={handleClick} key={i}>
                                                <DashListimg
                                                    src={item.image}
                                                />
                                                <div className="listnames">
                                                    <h4 className="">{item.name}</h4>
                                                    {/* <h5>DSTV Kenya</h5> */}
                                                </div>
                                                {/* {
                                                    active == item.serviceID && (
                                                        <>
                                                        
                                                            <DashListCheck src='/img/Check_.svg'/>
                                                        </>
                                                        )
                                                } */}
                                            </li>
                                        </>
                                    )
                                })
                    
                }
            </DashListsContent>
        </DashListContainer>
    );
}