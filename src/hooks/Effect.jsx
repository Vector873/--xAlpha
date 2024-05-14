import React, { useEffect, useState } from 'react' //import useState and useEffect

const Effect = () => {
    const [time,settime] = useState(0);
    useEffect(()=>{  //using useEffect hook
        setTimeout(()=>{settime(t=>t+1)},1000)  //set a timeout of 1 sec so it will run after 1 sec and increament time by 1 in every 1 sec
    },[])  //this array is empty because it will run only one time but if we put an array in this so it will run after the particular array is change or update
  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <h3>useEffect: </h3> {time}  {/*for displaying*/}
    </div>
  )
}

export default Effect
