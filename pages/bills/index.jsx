import react, { useEffect } from 'react';
import axios from "axios";
import Billsheader from "../../components/bills/header";
import Popular from "../../components/bills/popular";

export const getStaticProps = async () => {
    const billers = await axios.get('https://app-service.icadpay.com/api/AltBiller/servicesCategory');
    const billsdata = await billers.data;
    console
    const Categories = await axios.get('https://app-service.icadpay.com/api/AltBiller/serviceByIdentifier?id=airtime');
    const Catdata = await Categories.data;
    
    return {
        props:{
            bills:billsdata,
            cat:Catdata
        }
    }
    // const billers = await axios.get('https://app-service.icadpay.com/api/Biller/allBillers');
    // const billsdata = await billers.data;
    
    // const Categories = await axios.get('https://app-service.icadpay.com/api/Biller/billerCategories');
    // const Catdata = await Categories.data;
    
    // return {
    //     props:{
    //         bills:billsdata,
    //         cat:Catdata
    //     }
    // }
}

export default function Bills({bills,cat}) {

    useEffect(() => {
        console.log('request billers:',bills);
        console.log('request cat:',cat);
    }, [bills,cat])
    
    
    return (
        <>
            <Billsheader data={bills}/>
            <Popular bills={bills}/>
        </>
    );
}