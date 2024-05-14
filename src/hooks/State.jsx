import React, { useState } from 'react' //import useState hook from react

const State = () => {
    const [count,setcount] = useState(0); //intialize state name count and also it has a function which is setcount to update the state
  return (
    <div style={{display:"flex",marginTop:"1rem",gap:"0.4rem",height:"2rem",alignItems:"center"}}>
      <h3>useState: </h3>
      <button onClick={()=>setcount(c=>c-1)}>-</button>  {/*Update state by clicking minus button and decreament by 1*/}
      <p>{count}</p> {/*using count state for displaying count*/}
      <button onClick={()=>setcount(c=>c+1)}>+</button>  {/*Update state by clicking plus button and increament by 1*/}
    </div>
  )
}

export default State
