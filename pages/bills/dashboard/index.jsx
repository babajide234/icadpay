import { Billimg, DashMain, DashMainContent, DListimg } from "../../../components/bills/billsElements";
import Sidebar from "../../../components/bills/Sidebar";
import Modal from "../../../components/modal/modal";

export default function Dashboard() {
    return (
        <DashMain>
            <Modal show={false}/>
            <Sidebar/>
            <DashMainContent>
                <div className="dashheader">
                    <div className="imgcontainer">
                        <DListimg
                            src="/img/dstv.svg"
                        />
                    </div>
                    <div className="namecontainer">
                        <h3 className="">DSTV</h3>
                        <p className="">DSTV Kenya </p>
                    </div>
                </div>
                <div className="dashcontent">
                    <div className="dashcontent_right">
                        <div className="dashpay">
                            <h3 className="">Total price </h3>
                            <div className="price">
                                <h2><span>NGN</span> 5,000.00</h2>
                            </div>
                            <button className="paybtn">Pay</button>
                        </div>
                    </div>

                    <div className="dashcontent_left">
                        <h3 className="">Fill in the details to pay this bill</h3>

                        <div className="input_container">
                            <input type="text" placeholder="Number" />
                        </div>
                        <div className="input_container">
                            <select name="" id="">
                                <option value="" default>Select an option </option>
                            </select>
                        </div>
                        <div className="input_container">
                            <input type="text" placeholder="Amount" />
                            <span>₦</span>
                        </div>

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
            </DashMainContent>
        </DashMain>
    );
}