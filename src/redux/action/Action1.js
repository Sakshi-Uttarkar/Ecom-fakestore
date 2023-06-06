import React from "react";


export const FetchData=(category)=> async (dispatch)=>{
  dispatch({ type: "FETCH_DATA_REQUEST" });
  console.log(category);
    try {
     let apiurl=`https://fakestoreapi.com/products`
      if(category.category){
        apiurl=`${apiurl}/category/${category.category}`
      }
      const response = await fetch(apiurl);
      const json = await response.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: json });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
}

