import React, { useEffect, useRef } from 'react' //import useRef hook

const Ref = () => {
    const count = useRef(0); //initilize count by zero
    useEffect(()=>{ //we use useEffect for count the number of renders
        count.current++; //increament the counter 
        //we use count.current because to access and update the current value without any re-render
    }); //we did not assign dependency array because we want to run it on every render
  return (
    <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
      <h3>useRef: </h3>
        <p>Render count: {count.current}</p> {/*for display the number of counts*/}
    </div>
  )
}

export default Ref
