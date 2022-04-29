import react, { useState, useEffect} from "react";
import { Billimg, DashMain, DashMainContent, DListimg } from "../../../components/bills/billsElements";
import Sidebar from "../../../components/bills/Sidebar";
import Modal from "../../../components/modal/modal";
import { useRouter } from 'next/router'
import axios from "axios";
import Script from 'next/script'



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
    const { biller,status,amount,ref } = router.query;

    const [selectedBiller,setselectedBiller]=useState([]);
    const [amount_,setamount]=useState('4000');
    const [email,setemail]=useState('babajide234@gmail.com');
    const [phone,setphone]=useState('+2348135198896');
    const [firstname,setfirstname]=useState('babajide');
    const [lastname,setlastname]=useState('tomoshegbo');
    const [modal,setmodal]=useState(false);

     useEffect(()=>{
        if(status == 'SUCCESS'){
            console.log('status: ',status);
            setmodal(true)
        }
     },[status])   

     useEffect(()=>{
        if(Object.keys(selectedBiller).length !== 0 ){
            
            setamount(selectedBiller.amount)
        }
     },[selectedBiller])   

    const handleSelectBiller = (bill)=>{
        setselectedBiller(bill)
    }
    
    // console.log('biller',bills);
    const handlepayment = async ()=>{
        console.log('payment btn clicked');

        const payload = {
            key: 'test_ZTM1N2RmNWQ2MzE5Mjc4MTkzY2UxODkxYmE3ZDRmYzhlMWFjYmI2NjhhMzNiNGVjZmIzZWU3MDkwNjk1MTkzOA', // this is a demo key.  
            email: email, // customer email 
            amount: amount_, // amount to be processed
            currency: "NGN", // currency
            first_name: firstname,
            last_name: lastname,
            phone_number: phone, // customer's phone number (optional)
            customerId: email,
            ref: ` ${Math.floor((Math.random() * 1000000000) + 1)}`, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            narration: 'something nice',
            callback_url: window.location.href, // specified redirect URL (potional)
            
        }

        IcadPay.setup(payload,(response)=>{
          console.log(response);
        })
    }
    const handlemodal= ()=>{
        setmodal(false)
    }
    return (
        <DashMain>
            <Script 
                src="https://demo.icadpay.com/inline-pay.js" 
                strategy="lazyOnload" 
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <Modal show={modal} close={handlemodal} amount={amount} TxnRef={ref} name={selectedBiller.billPaymentProductName}/>
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
                        <div className="dashcontent_left">
                                <h3 className="">Fill in the details to pay this bill</h3>
                                {
                                    Object.keys(selectedBiller).length !== 0  && (
                                        <>
                                            {
                                                selectedBiller.isAmountFixed && (
                                                    <>   
                                                        <div className="input_div">

                                                            <label htmlFor="">Amount</label>  
                                                            <div className="input_container">
                                                                <input type={'numeric'} value={amount_} placeholder='Amount' onChange={(e)=> setamount(e.target.value)}  required={selectedBiller.required} />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                                    
                                }
                                {
                                    Object.keys(selectedBiller).length !== 0  ? (
                                        <>
                                            {
                                                selectedBiller.metadata.customFields.map((opt)=>{
                                                    if(opt.type == 'multiselect'){
                                                        return(
                                                            <>            
                                                            <div className="input_container">
                                                                <select type={opt.type} placeholder={opt.display_name} required={opt.required} >
                                                                    <option value={''} default>{opt.display_name}</option>
                                                                    {
                                                                        opt.selectOptions.map((val,ii)=>{
                                                                            return(
                                                                                <>
                                                                                    <option key={ii} value={val.VALUE}>{val.DISPLAY_NAME}</option>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                            </>
                                                        )
                                                    }
                                                    
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
                                    <input type="text" placeholder="Enter Email Address " value={email} onChange={(e)=>setemail(e.target.value)}/>
                                </div>
                                <div className="input_container">
                                    <input type="text" placeholder="Phone Number" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                                </div>

                            </div>
                            <div className="dashcontent_right">
                                <div className="dashpay">
                                    <h3 className="">Total price </h3>
                                    <div className="price">
                                        <h2><span>{selectedBiller.currency}</span> {amount_}</h2>
                                    </div>
                                    <button className="paybtn" onClick={handlepayment}>Pay</button>
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