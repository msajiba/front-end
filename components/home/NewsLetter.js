import { postDataToApi } from '@/utils/api';
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../Loader';
import axios from 'axios';
const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const newsletter = async()=>{
        try{
            const response = await axios.post("/api/admin/newsletter/store",{
                    email: email
            });
            toast.success("You've Subscribed Successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
        
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            setIsLoading(false)
        }catch(error){
            toast.error("Something went wrong", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
        
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              setIsLoading(false)
        }
    }
    const submitHandler =()=>{
      setIsLoading(true);
        newsletter();
        setEmail("");
    }
  return (
    <div className="cta cta-horizontal cta-horizontal-box pt-5 pb-5 mt-2" style={{backgroundColor: "#222"}}>
    <div className="container">
      <ToastContainer />

      <div className="row align-items-center justify-content-center">
        <div className="col-xl-4-5col offset-xl-10col">
          <div className="row align-items-center">
            <div className="col-lg-5 cta-txt text-lg-left text-center">
              <h3 className="cta-title text-white my-2 mt-0">
                Join Our Newsletter
              </h3>
              {/* End .cta-title */}
              <p className="cta-desc font-size-normal second-primary-color font-weight-normal">
                Subscribe to get information about products and coupons
              </p>
              {/* End .cta-desc font-size-normal */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-7 ">
         
                <div className="input-group d-flex justify-between ">
                  <input
                    type="email"
                    className="form-control mr-0 font-weight-normal"
                    placeholder="Enter your Email Address"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                   
                  />
                  <div className="input-group-append">
                    <button className="btn text-uppercase" type="submit" onClick={submitHandler} >
                      Subscribe 
                      <i className="icon-long-arrow-right mr-0" />
                      {isLoading && <Loader />}
                    </button>
                  </div>
                  {/* .End .input-group-append */}
                </div>
                {/* .End .input-group */}
            
            </div>
            {/* End .col-lg-7 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col-xl-8 offset-2 */}
      </div>
      {/* End .row */}
    </div>
    {/* End .container-fluid */}
  </div>
  )
}

export default NewsLetter