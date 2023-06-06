import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchDataRequested } from "../redux/action/checkoutAction";
import { useSelector } from "react-redux";

const Previewpage = () => {
  const dispatch= useDispatch();
  const {checkoutData,isLoading} = useSelector((state) => state.checkout);
  const error = useSelector((state) => state.error);

  // useEffect(()=>{
  //   dispatch(fetchDataRequested());
  // },[dispatch]);

  return (
    <>
      {checkoutData !== null ? (
        <div>
          <h2 style={{textAlign:"center",fontSize:60}}>Preview Page</h2>
          <h4 style={{fontSize:30,marginLeft:"100px",paddingTop:"25px"}}>Billing Page</h4>


          <p style={{paddingTop: "25px", marginLeft: "100px",fontSize: 20}}>First Name: {checkoutData.fname}</p>

          <p style={{paddingTop: "25px", marginLeft: "100px",fontSize: 20}}>Last Name: {checkoutData.lname}</p>

          <p style={{paddingTop: "25px", marginLeft: "100px",fontSize: 20}}>Email: {checkoutData.email}</p>

          <p style={{paddingTop: "25px", marginLeft: "100px",fontSize: 20}}>Address: {checkoutData.address}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};



export default Previewpage;
