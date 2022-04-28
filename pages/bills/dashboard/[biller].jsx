import react, { useState, useEffect} from "react";
import { Billimg, DashMain, DashMainContent, DListimg } from "../../../components/bills/billsElements";
import Sidebar from "../../../components/bills/Sidebar";
import Modal from "../../../components/modal/modal";
import { useRouter } from 'next/router'
import axios from "axios";



export const getStaticProps = async (context) => {
    
    const biller = context.params.biller
    
    const billers = await axios.get('https://app-service.icadpay.com/api/Biller/billerProducts?billerId='+biller);
    const billsdata = await billers.data;
    
    console.log('data',billsdata.products[0]);

    return {
        props:{
            bills:billsdata.products,
            sidbar:billsdata.products
        }
    }
}
export async function getStaticPaths(context) {
    console.log('njnj',context);
    
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function Dashboard({ bills,sidbar }) {
    const router = useRouter()
    const { biller } = router.query;

    const [selectedBiller,setselectedBiller]=useState([]);

    
    const handleSelectBiller = (bill)=>{
        setselectedBiller(bill)
    }

    console.log('biller',bills);

    return (
        <DashMain>
            <Modal show={false}/>
            <Sidebar data={bills} setBiller={handleSelectBiller} biller={selectedBiller}/>
            <DashMainContent>           
                <div className="dashheader">
                    <div className="imgcontainer">
                        <DListimg
                            src="/img/dstv.svg"
                        />
                    </div>
                    <div className="namecontainer">
                        <h3 className="">{biller}</h3>
                        <p className="">{bills.billPaymentProductName}</p>
                    </div>
                </div>
                    { Object.keys(selectedBiller).length !== 0 ? (
                        <>
                        <div className="dashcontent">
                            <div className="dashcontent_right">
                                <div className="dashpay">
                                    <h3 className="">Total price </h3>
                                    <div className="price">
                                        <h2><span>{selectedBiller.currency}</span> {selectedBiller.amount}</h2>
                                    </div>
                                    <button className="paybtn">Pay</button>
                                </div>
                            </div>

                            <div className="dashcontent_left">
                                <h3 className="">Fill in the details to pay this bill</h3>
                                {
                                    Object.keys(selectedBiller).length !== 0  ? (
                                        <>
                                        {
                                            selectedBiller.metadata.customFields.map((opt)=>{
                                                return(
                                                    <>            
                                                    <div className="input_container">
                                                        <input type={opt.type} placeholder={opt.display_name} required={opt.required} />
                                                    </div>
                                                    </>
                                                )
                                            })
                                        }
                                        </>
                                    ):(
                                        <>
                                        
                                        </>
                                    )
                                }
                                

                                <div className="subtext">
                                    <h3 className="">Enter your contact information </h3>
                                    <p>Your Receipt would be sent to you via your contact details </p>
                                </div>

                                <div className="input_container">
                                    <input type="text" placeholder="Enter Email Address " />
                                    <span>₦</span>
                                </div>
                                <div className="input_container">
                                    <span>₦</span>
                                    <input type="text" placeholder="Phone Number" />
                                </div>

                            </div>
                        </div>
                        </>
                        ):(
                            <>
                                <div className="" style={{ height:'50vh',width:'100%',display:"flex", justifyContent:'center',alignItems:'center' }}>
                                    <h3>Select Biller Product</h3>
                                </div>
                            </>
                        )
                        
                    }
            </DashMainContent>
        </DashMain>
    );
}