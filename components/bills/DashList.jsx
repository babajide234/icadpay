import { DashListContainer, DashListimg, DashListsContent,DashListCheck } from './billsElements';
import react, { useEffect, useState } from 'react';

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
            if(item.billPaymentProductId === id){
                setdata(item);
                setactive(item.billPaymentProductId);
            }
        })

        // console.log('DashList_____id',bill);
        
    }   
    return (
        <DashListContainer>
            <DashListsContent>
                {
                        datas.filter(Boolean).map((item,i)=>{
                            return(
                                        <>
                                            <li className={active == item.billPaymentProductId ? 'active':''} id={item.billPaymentProductId} onClick={handleClick} key={i}>
                                                <DashListimg
                                                    src='/img/dstvrec1.svg'
                                                />
                                                <div className="listnames">
                                                    <h4 className="">{item.billPaymentProductName}</h4>
                                                    {/* <h5>DSTV Kenya</h5> */}
                                                </div>
                                                {/* {
                                                    active && (
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