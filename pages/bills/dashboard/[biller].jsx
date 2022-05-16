import react, { useState, useEffect,useCallback } from "react";
import { Billimg, DashMain, DashMainContent, DListimg } from "../../../components/bills/billsElements";
import Sidebar from "../../../components/bills/Sidebar";
import Modal from "../../../components/modal/modal";
import { useRouter } from 'next/router'
import axios from "axios";
import Script from 'next/script'
import { isMobile,isBrowser } from "react-device-detect";



export const getStaticProps = async (context) => {
    
    const biller = context.params.biller
    
    const billers = await axios.get('https://app-service.icadpay.com/api/AltBiller/serviceByIdentifier?id='+biller);
    const billsdata = await billers.data;
    
    // console.log('data',billsdata.products[0]);
    // console.log('data',billsdata);

    return {
        props:{
            bills:billsdata,
            sidbar:billsdata
        }
    }
}
export async function getStaticPaths(context) {
    // console.log('njnj',context);
    
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function Dashboard({ bills,sidbar }) {
    const router = useRouter()
    const { biller,status,amount,ref } = router.query;

    const [selectedBiller,setselectedBiller]=useState([]);
    const [amount_,setamount]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [name,setname]=useState();
    const [modal,setmodal]=useState(false);
    const [fixed,setfixed]=useState(false);
    const [active,setactive]=useState(false);
    const [variety, setVariety]=useState(false);
    const [varietyData, setVarietyData]=useState();
    const [selectedVariety, setSelectedVariety]=useState({});
    const [type, setType]=useState('');
    const [serviceId, setServiceId]=useState({});
    const [billerCode, setbillerCode]=useState('');
    const [transactionId,setTransactionId]=useState('');
    const [proceed,setProceed]=useState(false);

     useEffect(()=>{
        if(status == 'SUCCESS'){
            // console.log('status: ',status);
            setmodal(true)
        }
    },[status])   
    
    useEffect(()=>{
        if(email.length < 3 || phone.length <= 10){
            setactive(false)
            // console.log('active: ',active);
        }else{
            setactive(true)
        }
     },[email,phone,active])   

     useEffect(()=>{
        if(Object.keys(selectedBiller).length !== 0 ){
            
            // setamount(selectedBiller.amount)

            // if(selectedBiller.isAmountFixed == "true"){
            //     setfixed(true)
            // }else{
            //     setfixed(false)
            // }
            handleVariety(selectedBiller.serviceID);
            setServiceId(selectedBiller.serviceID);
        }
        if(Object.keys(selectedVariety).length !== 0 ){
            
            
            selectedVariety.map(item=>{
                // console.log(item.fixedPrice)
                if(item.fixedPrice == "Yes"){
                    setamount(item.variation_amount);
                    setType(item.variation_code);
                    setfixed(true)
                    // console.log(item.variation_amount)
                }else{
                    setfixed(false)
                }
            })
        }
     },[selectedBiller,selectedVariety])   

     useEffect(()=>{
        if(billerCode.length >= 10){
             handleValidation();
        }
     },[billerCode])
     useEffect(()=>{
        if(isBrowser){
            setProceed(true)
        }else{
            setProceed(false)
        }
     },[])
    const handleSelectBiller = (bill)=>{
        setselectedBiller(bill)
        // console.log('slected bill',bill);
    }
    
    // console.log('biller',bills);
    const handlepaymentFull = async ()=>{
        // console.log('payment btn clicked');
        const namearr = name.split(" ");

        const payload = {
            key: 'live_ZmMxMzJiOGQ4MjZkODc4Y2ZiYjk5NTYxMTE5ODNkYjE5NzRiNjQzNTI4MmFiNGU4YTRkMzE0NzIwNDVhYzhmMQ', // this is a demo key.  
            email: email, // customer email 
            amount: amount_, // amount to be processed
            currency: "NGN", // currency
            first_name: namearr[0],
            last_name: namearr[1],
            phone_number: phone, // customer's phone number (optional)
            customerId: email,
            ref: transactionId, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            narration: 'something nice',
            isBill:true,
            callback_url: window.location.href, // specified redirect URL (potional)
            callback: (response) => {
                // console.log(response);
            },
            onSuccess: (response) => {
            //   console.log(response);
            },
            onError: (response) => {
            //   console.log(response);
            },
            onClose: () => {
            //   console.log('window closed');
              // alert('window closed');
            }
        }

        IcadPay.setup(payload);
        
    }

    const handleVariety = async (id)=>{
        const variety = await axios.get('https://app-service.icadpay.com/api/AltBiller/serviceVariety?id='+id);

        const varietyData = await variety.data;
    
        // console.log('data',billsdata.products[0]);
        if(varietyData == ''){
            // console.log('no data returned');
            setVariety(false);
        }else{
            // console.log('data',varietyData.varations);
            setVariety(true);
            setVarietyData(varietyData)
        }
    }

    const handleSelectChange= (id)=>{
        let arr =[];
        let filterArray = varietyData.varations;
        filterArray.filter((e)=>{
            if(e.variation_code == id){
                arr.push(e);
            }
        })
        // console.log('array values: ',arr);
        setSelectedVariety(arr);
        handleValidation();
    }
    const handlemodal= ()=>{
        setmodal(false)
    }
    const handleEmail= (e)=>{
        setemail(e.target.value)
    }
    const handlephone= (e)=>{
        setphone(e.target.value)
    }

    const handleName= (e)=>{
        setname(e.target.value)
    }

    const handleProceed= ()=>{
        setProceed(!proceed)
    }

    const handleValidation = useCallback( async ()=>{
        const payload ={
            billersCode: billerCode,
            serviceID: serviceId,
            type: type
        }
        const validation =await axios.post('https://app-service.icadpay.com/api/AltBiller/customerValidation',payload)
        const validationData = await validation.data;
        // console.log(payload);
        // console.log(validationData);
        if(validationData.WrongBillersCode == false ){
            setname('');
        }else{
            setname(validationData.Customer_Name)
        }
    },[billerCode,serviceId,type]);

    const handlePayment = async ()=>{
        const payload ={
            billPaymentProductId: serviceId,
            amount: amount_,
            name:name,
            email: email,
            phoneNumber: phone,
            customerId: '',
            billersCode:billerCode,
            variation_code: type
          }
        const res = await axios.post('https://app-service.icadpay.com/api/AltBiller/initiatePayment',payload)
        const resData = await res.data;
        // console.log('trans id: ', resData)
        setTransactionId(resData.transId);
        handlepaymentFull();
    }
    return (
        <DashMain>
            <Script 
                src="https://pay-service.icadpay.com/inline-pay.js" 
                strategy="lazyOnload" 
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <Modal show={modal} close={handlemodal} amount={amount} TxnRef={ref} name={selectedBiller.billPaymentProductName}/>
            <Sidebar data={bills} setBiller={handleSelectBiller} biller={selectedBiller} proceed={handleProceed}/>
            <DashMainContent detail={proceed}>           
                <div className="dashheader">

                    <div className="imgcontainer">
                        <DListimg
                            src={selectedBiller.image}
                        />
                    </div>
                    <div className="namecontainer">
                        
                        <div className="">

                            <h3 className="">{selectedBiller.name}</h3>
                            <p className="">{selectedBiller.serviceID}</p>
                        </div>
                        <div className="backbtn" onClick={handleProceed}>
                            <img src="/img/arrow_left.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                    { Object.keys(selectedBiller).length !== 0 ? (
                        <>
                        <div className="dashcontent">
                        <div className="dashcontent_left">
                                <h3 className="">Enter Your Detials</h3>
                                {
                                    Object.keys(selectedBiller).length !== 0  && (
                                        <>
                                            {
                                                variety && (
                                                    <>
                                                        <div className="input_container">
                                                            <select onChange={e => handleSelectChange(e.target.value)}>
                                                                <option value={''} default>{varietyData.serviceName}</option>
                                                                {
                                                                    varietyData.varations.map((val,ii)=>{
                                                                        return(
                                                                            <>
                                                                                <option key={ii} value={val.variation_code}>{val.name}</option>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {/* {
                                                Object.keys(selectedVariety).length !== 0 && (
                                                    <>   
                                                    
                                                    </>
                                                )
                                            } */}
                                            {
                                                selectedBiller && (
                                                    <>   
                                                        <div className="input_div">

                                                            <label htmlFor="">Amount</label>  
                                                            <div className='input_container'>
                                                                <input type={'numeric'} value={amount_} placeholder='Amount' onChange={(e)=> setamount(e.target.value)}   />
                                                            </div>
                                                        </div>
                                                        <div className="input_div">
                                                            <label htmlFor="">Recipient</label>  
                                                            <div className='input_container '>
                                                                <input type={'text'} value={billerCode} placeholder='Smart card no, meter/account no, phone/email (for data), etc.' onChange={(e)=> setbillerCode(e.target.value)}   />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            
                                            {/* {
                                                selectedBiller.isAmountFixed && (
                                                    <>   
                                                        <div className="input_div">

                                                            <label htmlFor="">Amount</label>  
                                                            <div className={fixed === true ? 'input_container disabled':'input_container'}>
                                                                <input type={'numeric'} value={amount_} placeholder='Amount' onChange={(e)=> setamount(e.target.value)}  required={selectedBiller.required} />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            } */}
                                        </>
                                    )
                                    
                                }
                                {
                                    // Object.keys(selectedBiller).length !== 0  ? (
                                    //     <>
                                    //         {
                                    //             selectedBiller.metadata.customFields.map((opt)=>{
                                    //                 if(opt.type == 'multiselect'){
                                    //                     return(
                                    //                         <>            
                                    //                         <div className="input_container">
                                    //                             <select type={opt.type} placeholder={opt.display_name} required={opt.required} >
                                    //                                 <option value={''} default>{opt.display_name}</option>
                                    //                                 {
                                    //                                     opt.selectOptions.map((val,ii)=>{
                                    //                                         return(
                                    //                                             <>
                                    //                                                 <option key={ii} value={val.VALUE}>{val.DISPLAY_NAME}</option>
                                    //                                             </>
                                    //                                         )
                                    //                                     })
                                    //                                 }
                                    //                             </select>
                                    //                         </div>
                                    //                         </>
                                    //                     )
                                    //                 }
                                                    
                                    //                 return(
                                    //                     <>            
                                    //                     <div className="input_container">
                                    //                         <input type={opt.type} placeholder={opt.display_name} required={opt.required} />
                                    //                     </div>
                                    //                     </>
                                    //                 )
                                    //             })
                                    //         }
                                    //     </>
                                    // ):(
                                    //     <>
                                        
                                    //     </>
                                    // )
                                }
                                

                                <div className="subtext">
                                    <h3 className="">Enter your contact information </h3>
                                    <p>Your receipt would be sent to you via your contact details </p>
                                </div>

                                <div className="input_container">
                                    <input type="email" value={name} onChange={handleName} placeholder="Enter Full Name"/>
                                </div>
                                <div className="input_container">
                                    <input type="email" value={email} onChange={handleEmail} placeholder="Enter Email Address xxx@mail.com "/>
                                </div>
                                <div className="input_container">
                                    <input type="tel" value={phone} onChange={handlephone} placeholder="Phone Number +234xxxxxxxxxxx"/>
                                </div>

                        </div>
                        <div className="dashcontent_right">
                            {
                                proceed && (
                                    <>
                                    <div className="dashpay">
                                
                                        <h3 className="">Total price </h3>
                                        <div className="price">
                                            <h2><span>NGN</span> {amount_}</h2>
                                            {/* <h2><span>{selectedBiller.currency}</span> {amount_}</h2> */}
                                        </div>
                                        <button className={ active ? 'paybtn btn':'paybtn_not btn'} onClick={handlePayment}>Pay</button>
                                    </div>
                                    </>
                                )
                            }
                            
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