import React from 'react'
import { useReducer } from "react";  //import useReducer from react

const initialState = {count:0};  //initialize the initial state of counter which is zero
const reducer = (state,action)=>{  //creating reducer function for performing the actions
    switch(action.type){  //switch statement for action
        case "increament":  
            return{...state,count:state.count+1};  //in this case we are using state by spread operator and update with increament of 1
        case "decreament":
            return{...state,count:state.count-1};  //in this case we are using state by spread operator and update with decreament of 1
    }
}
const Reducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState);  //initialize the useReducer hook and state for the count and dispatch for the type of the action perform by the reducer
    const inc=()=>{
        dispatch({type:"increament"}) //giving action type increament 
    }
    const dec=()=>{
        dispatch({type:"decreament"}) //giving action type decreament 
    }
  return (
    <div style={{display:"flex",gap:"0.4rem",height:"2rem",alignItems:"center"}}>
        <h3>useReducer: </h3>
      <button onClick={dec}>-</button>  {/*Update state by clicking minus button and decreament by 1*/}
      <p>{state.count}</p> {/*using count state for displaying count*/}
      <button onClick={inc}>+</button>  {/*Update state by clicking plus button and increament by 1*/}
    </div>
  )
}

export default Reducer
